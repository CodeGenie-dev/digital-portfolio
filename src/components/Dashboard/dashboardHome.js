import { useRef } from "react";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from "firebase/firestore";

const DashboardHome = () => {

    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description, 
                        url,
                        image: downloadUrl
                    })
                }, () => {
                    savePortfolio({
                        name,
                        description, 
                        url,
                        image: null
                    })
                })
            }, () => {
                savePortfolio({
                    name,
                    description, 
                    url,
                    image: null
                })
            }
        )

    }

    const savePortfolio = async (portfolio) => {
        console.log(portfolio)
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            alert('Portfolio item sucessfully uploaded!')
            window.location.reload(false)
        } catch (error) {
            alert('Failed to add portfolio item!')
        }
    }

    return (

        <div className="dashboardHome">
            <form ref={form} onSubmit={submitPortfolio}>
                <p>
                    <input type="text" placeholder="Name" />
                </p>
                <p>
                    <textarea placeholder="Description" />
                </p>
                <p>
                    <input type="text" placeholder="Url" />
                </p>
                <p>
                    <input type="file" placeholder="Image" />
                </p>
                <button onClick={() => auth.signOut()}>Sign Out</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DashboardHome;