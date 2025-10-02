import './Experiences.css'
import Image from 'react-bootstrap/Image';

export default function Experiences() {
    return (
        <div className='experiences' id='experience'>
            
                <h2 id='subheader' className='my-5'><i class="bi bi-briefcase-fill"></i> Experience</h2>
                <div className="experience">
                    <div>
                        <Image src='td_logo.png' id='td' className="mb-5" roundedCircle fluid></Image>
                    </div>
                    <div className="desc">
                        <h4 className='cardHeader'>TD Securities - Software Engineer Intern</h4>
                        <p>
                        -Built and optimized Python programs to generate training/testing datasets for ML models predicting trade
                        sensitivity scores, reducing computation time from 10-12 hours to a few minutes
                        <br />
                        <br />
                        -Collaborated on the development, training, and evaluation of ML models across multiple financial risk types
                        <br />
                        <br />
                        -Engineered Python script to retrieve and reconstruct raw data into standardized formats for seamless model training
                        <br />
                        <br />
                        -Created Python utility to generate 4,000+ synthetic datasets, boosting the scale and efficiency of ML model training,
                        validation, and testing
                        </p>
                    </div>
                </div>
                <div className='experience'>
                    <div>
                        <Image src='ck_logo.png' id='ck' className="mb-5" roundedCircle fluid></Image>
                        
                    </div>
                    <div className='desc'>
                        <h4 className='cardHeader'>ChefKaters - Software Engineer</h4>
                        <p>
                        -Participate in weekly meetings to brainstorm business ideas, refine marketing strategies, and plan website layouts.
                        <br />
                        <br />
                        -Design and develop webpage layouts using React.js.
                        <br />
                        <br />
                        -Utilize Bootstrap React to implement over 10+ reusable components.
                        <br />
                        <br />
                        -Submit completed tasks for review and approval on GitHub prior to deployment to the live domain.
                        </p>
                    </div>
                    
                </div>
                <div className='experience'>
                    <div>
                        <Image src='efk_logo.png' id='efk' className="mb-5" roundedCircle fluid></Image>
                        
                    </div>
                    <div className='desc'>
                        <h4 className='cardHeader'>Engineering For Kids - Lead Teacher</h4>
                        <p>
                        -Educate young students about the various disciplines of engineering and their real-world applications. Increased number of held classes by 10%, with 4-5 students per class.
                        <br />
                        <br />
                        -Guide students in creating projects that integrate engineering principles while following practical methodologies, including the Engineering Design Process.
                        <br />
                        <br />
                        -Present the organization’s projects to families interested in enrolling their children in the available camps.
                    </p>
                    </div>
                    
                </div>
                <div className='experience'>
                    <div>
                        <Image src='prl_logo.jpg' id='prl' className="mb-5" roundedCircle fluid></Image>
                        
                    </div>
                    <div className='desc'>
                        <h4 className='cardHeader'>Polo Ralph Lauren - Brand Ambassador</h4>
                        <p>
                        -Operate POS systems for customer transactions, order placements, returns, and exchanges.
                        <br />
                        <br />
                        -Register 75+ customers daily for the PoloConnect advertising service.
                        <br />
                        <br />
                        -Attain a 97% email sign-up rate among all engaged customers
                    </p>
                    </div>
                    
                </div>
                
            
            
        </div>
    )
}