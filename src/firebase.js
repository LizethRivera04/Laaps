import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXxjCzQv7pSP-vVfLbIig2M0SXv_LIutw",
    authDomain: "laaps-e40c2.firebaseapp.com",
    databaseURL: "https://laaps-e40c2.firebaseio.com",
    projectId: "laaps-e40c2",
    storageBucket: "laaps-e40c2.appspot.com",
    messagingSenderId: "916288481029",
    appId: "1:916288481029:web:b2e78ff38233960cb9396c"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore()

const currentUser = firebase.auth().onAuthStateChanged(user => user)

const createUser = (email, password, name, lastname) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
            db.collection("users").doc(data.user.uid).set({
                name: name,
                lastname: lastname,
                email: email,
                uid: data.user.uid
            });
        })
        .catch(error => console.log(error))
}

const loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch(error => console.log(error.message))
}

const logOutUser = () => firebase.auth().signOut().then(() => console.log("logout"))

const google = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(data => {
            db.collection("users").doc(data.user.uid).set({
                name: data.user.displayName,
                lastname: "",
                email: data.user.email,
                uid: data.user.uid
            });
            console.log(data)
        })
        .catch(error => console.log(error))
}

const facebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(data => {
            db.collection("users").doc(currentUser.uid).set({
                name: data.user.displayName,
                lastname: "",
                email: data.user.email,
                uid: data.user.uid
            });
        })
        .catch(error => console.log(error))
}


const fileUserStorage = (image) => {
    let user = firebase.auth().currentUser;
    console.log(user.uid);
    console.log(image);
    storage.ref('photoUsers').child(image.name).put(image)
        .then(snapshot => {
            // console.log(snapshot);
            return snapshot.ref.getDownloadURL()
        })
        .then(url => {
            let link = url
            console.log(link);
            updatePhoto(link, user.uid)
        })
}

const fileAutoStorage = (image) => {
    let user = firebase.auth().currentUser;
    console.log(user.uid);
    console.log(image);
    storage.ref('photoUsers').child(image.name).put(image)
        .then(snapshot => {
            // console.log(snapshot);
            return snapshot.ref.getDownloadURL()
        })
        .then(url => {
            let link = url
            console.log(link);
            updateFileAuto(link, user.uid)
        })
}

const updatePhoto = (link, uid) => {
    const docRef = db.collection('users/').doc(uid);
    docRef.update({
        photo: link
    })
        .then(res => console.log('Se ha actualizado la foto del usuario con id', uid))
        .catch(err => console.err('Error al actualizar la foto del usuario', err))
}


const updateFileAuto = (link, uid) => {
    const docRef = db.collection('users/').doc(uid);
    docRef.update({
        autos: firebase.firestore.FieldValue.arrayUnion(link)
    })
        .then(res => console.log('Se ha agregado un auto al usuario con id', uid))
        .catch(err => console.err('Error al agregar un auto al usuario', err))
}

const userObserver = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const docRef = db.collection('users/').doc(user.uid);
            docRef.get().then(function (snapshot) {
                let myData = snapshot.data();
                console.log(myData)
                return myData
            })
        } else {
            // No user is signed in.
            console.log('No user');
        }
    });
}
userObserver();

const saveServiceBD = (service) => {
    let user = firebase.auth().currentUser;
    console.log(user);
    const docRef = db.collection('users/').doc(user.uid);
    docRef.update({
        services: firebase.firestore.FieldValue.arrayUnion(service),

    })
}


export default { fb, createUser, google, facebook, loginUser, logOutUser, fileUserStorage, userObserver, saveServiceBD, fileAutoStorage };

