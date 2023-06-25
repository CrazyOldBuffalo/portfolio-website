import { faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <section className="py-10 h-screen items-center- justify-center ">
            <div className="container mx-auto text-center p-2">
                <code className="text-4xl lg:text-6xl text-variables font-bold mb-6">
                    Tom Boberek - <span className="text-parameters">Software</span> <span className="text-strings">Engineer!</span>
                </code>
                <br />
                <code className="text-2xl lg:text-4xl text-accent font-bold mb-3">
                    Full Stack Developer with specialisation in IoT, <FontAwesomeIcon icon={faPython} className="inline w-10 h-10 text-strings"/> & <FontAwesomeIcon icon={faRobot} className="inline w-10 h-10 text-parameters"/>
                </code>

            </div>
        </section>
    )
}