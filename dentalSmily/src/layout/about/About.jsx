import React from 'react';
import NavBar from '../../components/NavBar';
import './About.css';
import foto1 from '../../assets/Aboutus1.png';
import foto2 from '../../assets/Aboutus2.png';
import foto3 from '../../assets/Aboutus3.png';


export const About = () => {
    return (
        <>
            <NavBar />
            <hr />
            <h3>Welcome to <b> dentalSmily </b> clinic. We have something for you.</h3>
            <p>Wheter you are interested in a specific dental treatment or require a general check-up, our award-winning team is ready to provide
                you with the best professional care in a modern environment
                Our dental practice is located in a rapidly developing area somewhere around here</p>
            <div className='maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24662.889667087824!2d-0.3652895913486753!3d39.404645947955814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60496260d28321%3A0xfea99f1d5ad9b75!2sPinedo!5e0!3m2!1ses!2ses!4v1678808042574!5m2!1ses!2ses" width="300" height="200"></iframe>
            </div>
            <p>- At our modern and professional practice, you can enjoy a relaxing ambience and a warm welcome from our team of dental and 
                healtcare professionals.
            </p>
            <p>- We take the time to listen to any concerns about your dental care and treatments goals, so you can feel at ease</p>
            <img src={foto3} alt="logo" style={{ width: "20em", height: "15em",}}/>
            <p>- Our primary aim is to help you achieve an exceptional standard of oral health via preventivev education. Our dental and healthcare
                professional will treat you with genuine care and underrstanding. Any treatment we recommend will be in the best interest of your oral health.
            </p>
            <p>- Our dental clinic offers fully functional ground-floor surgeries and wheelchair access, with high-quality chairs to ensure your comfort during dental 
                check-ups, treatments and cleanings. We believe in providing the ultimate customer experience and employ a team of highly trained dentisst across 
                a variety of disciplines.
            </p>
                <img src={foto1} alt="logo" style={{ width: "20em", height: "15em",}}/>

            <p>Ours Services:</p>
            <ul>
                <li>Private and NHS dental care.</li>
                <li>Routine preventative dentistry for children and adults.</li>
                <li>Cosmetic dentistry, such as veneews, teeth whitening, and white fillings.</li>
                <li>Orthodontic treatment using Invisalign to straighten teeth.</li>
                <li>Dental implants for the replacement of missing teeth.</li>
                <li>Inlays and onlays for severe cavities.</li>
                <li>Toohh extraction.</li>
                <li>Emergency treatments on the same day.</li>
            </ul>
            <img src={foto2} alt="logo" style={{ width: "20em", height: "15em",}}/>






        </>
    )
}
