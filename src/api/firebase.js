import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Google auth
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
// Realtime database
const database = getDatabase(app);

export function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function googleSignOut() {
  signOut(auth);
}

export function onUserStateChanged(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await checkIsAdmin(user) : null;
    console.log(updatedUser);
    callback(updatedUser);
  });
}

async function checkIsAdmin(user) {
  return get(ref(database, "admins/")).then((snapshot) => {
    if (snapshot.exists()) {
      const isAdmin = snapshot.val().includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export async function writeProduct(product, url) {
  const uuid = uuidv4();
  return set(ref(database, `products/${uuid}`), {
    ...product,
    uuid,
    price: parseInt(product.price),
    url,
    options: product.options.split(","),
  }).then();
}

export async function readProducts() {
  return get(ref(database, "products/")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function writeCart(cart, uid) {
  console.log(cart);
  return set(ref(database, `carts/${uid}/${cart.productId}`), {
    ...cart,
    price: parseInt(cart.price),
    quantity: parseInt(1),
  }).then();
}

export async function updateCart(cart, uid) {
  return set(ref(database, `carts/${uid}/${cart.productId}`), {
    ...cart
  }).then();
}

export async function readCarts(uid) {
  return get(ref(database, `carts/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  })
}

export async function deleteCart(uid, productId) {
  return remove(ref(database, `carts/${uid}/${productId}`));
}