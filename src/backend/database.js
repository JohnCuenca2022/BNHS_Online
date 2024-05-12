import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig'
import {
    getFirestore,
    Timestamp,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    collection,
    query,
    orderBy,
    arrayUnion
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createAnnouncement(title, body, userID) {
    try {
        const docRef = await addDoc(collection(db, "announcements"), {
            title: title,
            body: body,
            date: Timestamp.now(),
            postedBy: userID
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function readAnnouncements() {
    const querySnapshot = await getDocs(collection(db, "announcements"));
    return querySnapshot
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //   });
}

export async function updateAnnouncement(title, body, docID) {
    const announcementsRef = doc(db, "announcements", docID);

    await updateDoc(announcementsRef, {
        title: title,
        body: body
    });
}

export async function deleteAnnouncement(docID) {
    await deleteDoc(doc(db, "announcements", docID));
}

export async function createPost(title, content, userID) {
    try {
        const docRef = await addDoc(collection(db, "forum_posts"), {
            title: title,
            content: content,
            date: Timestamp.now(),
            postedBy: userID
        }).then(() => {
            readPosts()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function readPosts() {
    const postsRef = collection(db, "forum_posts")
    const q = query(postsRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //   });
}

export async function updatePosts(title, body, docID) {
    const postsRef = doc(db, "forum_posts", docID);

    await updateDoc(postsRef, {
        title: title,
        body: body
    });
}

export async function deletePost(docID) {
    await deleteDoc(doc(db, "forum_posts", docID));
}

export async function addComment(docID, comment, userID, username) {
    const newComment = {
        comment: comment,
        userID: userID,
        date: Timestamp.now(),
        username: username
    }

    const postsRef = doc(db, "forum_posts", docID);

    await updateDoc(postsRef, {
        commentsList: arrayUnion(newComment)
    });
}

export async function createNewUserData(userID, email, firstname, lastname, studentNumber) {
    try {
        const docRef = setDoc(doc(db, "users", userID), {
          email: email,
          firstname: firstname,
          lastname: lastname,
          studentNumber: studentNumber,
          dateJoined: Timestamp.now(),
        }).then(() => {
            window.location.href = '/';
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getUserData(userID) {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap
    } else {
        // docSnap.data() will be undefined in this case
        return undefined
    }
}

export async function isUserAdmin(userID) {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("user is")
        var isAdmin = docSnap.data().isAdmin
        console.log(isAdmin)
        if (docSnap.data().isAdmin == undefined) {
            isAdmin = false
        }
        return isAdmin
    } else {
        // docSnap.data() will be undefined in this case
        return false
    }
}

export async function getUserName(userID){
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    
        var firstname = docSnap.data().firstname
        var lastname = docSnap.data().lastname

        return firstname + lastname
    } else {
        // docSnap.data() will be undefined in this case
        return "Anonymous"
    }
}