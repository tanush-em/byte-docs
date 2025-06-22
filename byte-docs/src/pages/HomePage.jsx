import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";

const Homepage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [loadinfg, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/notes");
                setNotes(res.data);
                setIsRateLimited(false);
                setLoading(false);

            } catch (error) {
                console.log("Error fetching notes:", error);
                if (error.response && error.response.status === 429) {
                    console.log("Rate limit exceeded");
                    setIsRateLimited(true);
                } 
                toast.error("Failed to fetch notes. Please try again later.");
            }
        };
        fetchNotes();
    }, []);

    return (
        <div>
            <Navbar />
            {isRateLimited && <RateLimitedUI />}
        </div>
    )
}
export default Homepage;