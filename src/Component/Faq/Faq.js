import React, {useState} from 'react'
import "./Faq.css"
const Faq = () => {
    const [showContainer1, setShowContainer2] = useState(false);
    const [showContainer2,setShowContainer3]=useState(false)
    const [showContainer3, setShowContainer4]=useState(false)
    const [showContainer4,setShowContainer5]=useState(false)
    const [showContainer5, setShowContainer6]=useState(false)
    const [showContainer6, setShowContainer7]=useState(false)
    const [showContainer7,setShowContainer8] = useState(false)
    const [showContainer8, setShowContainer9]=useState(false)
    const [showContainer9, setShowContainer10]=useState(false)
    const [showContainer10, setShowContainer11]=useState(false)
    const [showParagraph1, setParagraph2]=useState(false)
    const [showParagraph2, setParagraph3]=useState(false)
    const [showParagraph3, setParagraph4]=useState(false)
    const [showParagraph4, setParagraph5]=useState(false)
    const [showParagraph5, setParagraph6]=useState(false)
    const [showParagraph6, setParagraph7]=useState(false)
    const [showParagraph7, setParagraph8]=useState(false)
    const [showParagraph8, setParagraph9]=useState(false)
    const [showParagraph9, setParagraph10]=useState(false) 
    const [showParagraph10, setParagraph11]=useState(false) 

    const [showParagraph11, setParagraph12]=useState(false) 

    const [showParagraph12, setParagraph13]=useState(false) 
    const [showParagraph13, setParagraph14]=useState(false) 
    const [showParagraph14, setParagraph15]=useState(false) 
    const [showParagraph15, setParagraph16]=useState(false) 
    const [showParagraph16, setParagraph17]=useState(false) 
    const [showParagraph17, setParagraph18]=useState(false) 
    const [showParagraph18, setParagraph19]=useState(false) 
    const [showParagraph19, setParagraph20]=useState(false) 
    const [showParagraph20, setParagraph21]=useState(false) 
   
    const [showParagraph21, setParagraph22]=useState(false) 
    const [showParagraph22, setParagraph23]=useState(false) 
    const [showParagraph23, setParagraph24]=useState(false) 
    const [showParagraph24, setParagraph25]=useState(false)
    const [showParagraph25, setParagraph26]=useState(false)
    const [showParagraph26, setParagraph27]=useState(false)
    const [showParagraph27, setParagraph28]=useState(false)
    const [showParagraph28, setParagraph29]=useState(false) 

    const [showParagraph29, setParagraph30]=useState(false) 
    const [showParagraph30, setParagraph31]=useState(false) 
    const [showParagraph31, setParagraph32]=useState(false) 
    const [showParagraph32, setParagraph33]=useState(false) 
    const [showParagraph33, setParagraph34]=useState(false) 
    const [showParagraph34, setParagraph35]=useState(false) 
    const [showParagraph35, setParagraph36]=useState(false) 
    const [showParagraph36, setParagraph37]=useState(false) 

    const [showParagraph37, setParagraph38]=useState(false) 
    const [showParagraph38, setParagraph39]=useState(false) 
    const [showParagraph39, setParagraph40]=useState(false) 
    const [showParagraph40, setParagraph41]=useState(false) 
    

  const toggleContainer1 = () => {
    setShowContainer2(!showContainer1);
    setShowContainer3(false);
    setShowContainer4(false);
    setShowContainer5(false)
    setShowContainer6(false)
    setShowContainer7(false)
    setShowContainer8(false)
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  };
  
  const toggleContainer2 = () => {
    setShowContainer3(!showContainer2);
    setShowContainer2(false);

    setShowContainer4(false);
    setShowContainer5(false)
    setShowContainer6(false)
    setShowContainer7(false)
    setShowContainer8(false)
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  };
  const toggleContainer3 = () => {
    setShowContainer4(!showContainer3);
    setShowContainer2(false);
    setShowContainer3(false);
    setShowContainer5(false)
    setShowContainer6(false)
    setShowContainer7(false)
    setShowContainer8(false)
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  };
  const toggleContainer4=()=>{
    setShowContainer5(!showContainer4)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);
    
    setShowContainer6(false)
    setShowContainer7(false)
    setShowContainer8(false)
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  }

  const toggleContainer5=()=>{
    setShowContainer6(!showContainer5)
    setShowContainer5(false)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);
    
    
    setShowContainer7(false)
    setShowContainer8(false)
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  }
  const toggleContainer6=()=>{
    setShowContainer7(!showContainer6)
    setShowContainer6(false)
    setShowContainer5(false)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);   
    setShowContainer8(false)
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  }
  const toggleContainer7=()=>{
    setShowContainer8(!showContainer7)
    setShowContainer7(false)
    setShowContainer6(false)
    setShowContainer5(false)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);      
   
    setShowContainer9(false)
    setShowContainer10(false)
    setShowContainer11(false)
  }
  const toggleContainer8=()=>{
    setShowContainer9(!showContainer8)
    setShowContainer8(false)
    setShowContainer7(false)
    setShowContainer6(false)
    setShowContainer5(false)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);     
    setShowContainer10(false)
    setShowContainer11(false)
  }
  const toggleContainer9=()=>{
    setShowContainer10(!showContainer9)
    setShowContainer9(false)
    setShowContainer8(false)
    setShowContainer7(false)
    setShowContainer6(false)
    setShowContainer5(false)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);     
    setShowContainer11(false)
  }
  const toggleContainer10=()=>{
    setShowContainer11(!showContainer10)
    setShowContainer10(false)
    setShowContainer9(false)
    setShowContainer8(false)
    setShowContainer7(false)
    setShowContainer6(false)
    setShowContainer5(false)
    setShowContainer4(false);
    setShowContainer2(false);
    setShowContainer3(false);     
   
  }
//paragraph
  const toggleParagraph1=()=>{
       setParagraph2(!showParagraph1)
  }

  const toggleParagraph2=()=>{
    setParagraph3(!showParagraph2)
  }
  const toggleParagraph3=()=>{
    setParagraph4(!showParagraph3)
  }
  const toggleParagraph4=()=>{
    setParagraph5(!showParagraph4)
  }

  const toggleParagraph5=()=>{
    setParagraph6(!showParagraph5)
  }
  const toggleParagraph6=()=>{
    setParagraph7(!showParagraph6)
  }
  const toggleParagraph7=()=>{
    setParagraph8(!showParagraph7)
  }
  const toggleParagraph8=()=>{
    setParagraph9(!showParagraph8)
  }
  const toggleParagraph9=()=>{
    setParagraph10(!showParagraph9)
  }
  const toggleParagraph10=()=>{
    setParagraph11(!showParagraph10)
  }
  const toggleParagraph11=()=>{
    setParagraph12(!showParagraph11)
  }
  const toggleParagraph12=()=>{
    setParagraph13(!showParagraph12)
  }
  const toggleParagraph13=()=>{
    setParagraph14(!showParagraph13)
  }
  const toggleParagraph14=()=>{
    setParagraph15(!showParagraph14)
  }
  const toggleParagraph15=()=>{
    setParagraph16(!showParagraph14)
  }
  const toggleParagraph16=()=>{
    setParagraph17(!showParagraph16)
  }

  const toggleParagraph17=()=>{
    setParagraph18(!showParagraph17)
  }
  const toggleParagraph18=()=>{
    setParagraph19(!showParagraph18)
  }
  const toggleParagraph19=()=>{
    setParagraph20(!showParagraph19)
  }
  const toggleParagraph20=()=>{
    setParagraph21(!showParagraph20)
  }
  const toggleParagraph21=()=>{
    setParagraph22(!showParagraph21)
  }
  const toggleParagraph22=()=>{
    setParagraph23(!showParagraph22)
  }
  const toggleParagraph23=()=>{
    setParagraph24(!showParagraph23)
  }
  const toggleParagraph24=()=>{
    setParagraph25(!showParagraph24)
  }
  const toggleParagraph25=()=>{
    setParagraph26(!showParagraph25)
  }
  const toggleParagraph26=()=>{
    setParagraph27(!showParagraph26)
  }
  const toggleParagraph27=()=>{
    setParagraph28(!showParagraph27)
  }
  const toggleParagraph28=()=>{
    setParagraph29(!showParagraph28)
  }

  const toggleParagraph29=()=>{
    setParagraph30(!showParagraph29)
  }
  const toggleParagraph30=()=>{
    setParagraph31(!showParagraph30)
  }
  const toggleParagraph31=()=>{
    setParagraph32(!showParagraph31)
  }
  const toggleParagraph32=()=>{
    setParagraph33(!showParagraph32)
  }

  const toggleParagraph33=()=>{
    setParagraph34(!showParagraph33)
  }
  const toggleParagraph34=()=>{
    setParagraph35(!showParagraph34)
  }
  const toggleParagraph35=()=>{
    setParagraph36(!showParagraph35)
  }
  const toggleParagraph36=()=>{
    setParagraph37(!showParagraph36)
  }
  const toggleParagraph37=()=>{
    setParagraph38(!showParagraph37)
  }
  const toggleParagraph38=()=>{
    setParagraph39(!showParagraph38)
  }
  const toggleParagraph39=()=>{
    setParagraph40(!showParagraph39)
  }
  const toggleParagraph40=()=>{
    setParagraph41(!showParagraph40)
  }

  return (
    <div className='hole-container'> 
    <div className='main-faq'>
        <h1 className='heading1'>Frequently Asked Questions</h1>
        <p className='paragraph'>Welcome, How can we help you?</p>
        <input type="text" placeholder='Type here to search for answers' className='input'/>
    </div>

    <div className='second-container'>
        <div className='scrollable-content'>

        
        <div className='container1' onClick={toggleContainer1}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/ServiceLogo.450311055b1879a57cfd94a0211bb744.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'>Software Development</h1>
                </div>
              

            </div>
            
        </div>
        <div className='container1' onClick={toggleContainer2}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/AppDevelopmentLogo.56f6e4f4730833c3d0db901b8e10132e.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'>App Development</h1>
                </div>
              

            </div>
            
        </div>
        <div className='container1' onClick={toggleContainer10}>
            <div className='img-container'>
                <div>
                    <img src="https://certontech.com/static/media/WebDevelopmentLogo.fc3a5cd35861f8231568a33566940f10.svg" alt="" className='img'/>
                </div>
                <div>
                    <h1 className='text'>Web Development</h1>
                </div>

            </div>

        </div>
        <div className='container1' onClick={toggleContainer3}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/HrLogo.64a1d4c071af98daf444565aba769810.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'>Talent Acquisition and Recruitment</h1>
                </div>
              

            </div>
          
        </div>
        <div className='container1' onClick={toggleContainer4}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/PerformanceLogo.dc48e55511f903513a5dbc4b08b2a9a1.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'>Performance  Management</h1>
                </div>
              

            </div>
            
        </div>
        <div className='container1' onClick={toggleContainer5}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/TrainingLogo.f41f73aad4c0e69a4e78a6c7a45b8ecb.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'> Employee Training and Development</h1>
                </div>
              

            </div>
          
        </div>
        <div className='container1' onClick={toggleContainer6}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/DevelopmentLogo.b9baf8e88f029029b7b60dbe3fb29f19.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'>Organizational Development</h1>
                </div>
              

            </div>
            
        </div>
        <div className='container1' onClick={toggleContainer7}>
            <div className='img-container'>
                <div>
                <img src="https://certontech.com/static/media/BrandingLogo.d8cbe6a04a2b03348cb01f73d94dce22.svg" alt="" className='img'/>
                </div>
                
                <div>
                    <h1 className='text'>Branding and Positioning</h1>
                </div>
              

            </div>
            
        </div>
        <div className='container1' onClick={toggleContainer8}>
           <div className='img-container'>
            <div>
                <img src="https://certontech.com/static/media/MarketLogo.05ac5a8f8648dea406316e2871c101dd.svg" alt="" className='img'/>
            </div>
           <div>
            <h1 className='text'>Market Research and Analysis</h1>
           </div>

           </div>
        </div>
        <div className='container1' onClick={toggleContainer9}>
         <div className='img-container'>
            <div>
                <img src="https://certontech.com/static/media/CrmLogo.46e1086d7f0989b2fac17d9f1679000d.svg" alt="" className='img'/>
            </div>
            <div>
                <h1 className='text'>CRM</h1>
            </div>

         </div>
        </div>
        </div>
        <div>
            <div>

            
            {showContainer1 &&(
              <div className='container2'>

              <div>
                      <h1 className='heading2' onClick={toggleParagraph1}>Which programming languages and technologies are used by certon for software development?</h1>
                      {showParagraph1 && (
                            <p className='paragraph1'>Certon uses different programming languages such as Java, Python, JavaScript, etc for software development</p>
                      )}
                      <hr className='line'/>
                  </div>
                  <div>
                      <h1 className='heading2' onClick={toggleParagraph2}>What security measures are taken by Certon for software applications?</h1>
                      {showParagraph2 &&(
                      <p className='paragraph1'>Certon takes Various security measures for securing software applications. It includes regular security audits and testing and other security measures for servers, networks, databases, etc.</p>
                      )}
                      <hr className='line'/>
                  </div>
                  <div>
                      <h1 className='heading2' onClick={toggleParagraph3} >Does Certon offer support and maintenance for software applications?</h1>
                     {showParagraph3 && (
                      <p className='paragraph1'>Yes, we offer support and maintenance for software applications.</p>
                     )}
                      <hr className='line'/>
                  </div>
                  <div>
                      <h1 className='heading2' onClick={toggleParagraph4}> How does Certon maintain the quality of software?</h1>
                      {showParagraph4 && (

                      <p className='paragraph1'>Certon maintains the quality of software through client feedback, testing, systematic code review processes, etc.</p>
                      )}
                      <hr className='line'/>
                  </div>
  
  
              </div>
            )}
            </div>
            <div>
                {showContainer2 &&(
                    <div className='container2'>
                 <div>
                    <h1 className='heading2' onClick={toggleParagraph5}>How does certon's app development differ from others?</h1>
                    {showParagraph5 && (
                    <p className='paragraph1'>Certons app development process stands out from others. The quality, our user-centric approach, and the technology used for the app development process are unique.</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph6}>Does Certon offer custom app development?</h1>
                    {showParagraph6 && (
                    <p className='paragraph1'>Yes, Certon offers custom app development</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph7}>What security measures are taken by Certon for apps?</h1>
                    {showParagraph7 && (
                    <p className='paragraph1'>Various security measures are taken by Certon for apps such as secure APIs, secure coding practices and regular security audits, etc.</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph8}> What about the data protection measures by Certon?</h1>
                    {showParagraph8 && ( 
                    <p className='paragraph1'>Certon implements various measures to safeguard the information through data backup and recovery, secure data storage, and other different ways.</p>
)} 
                    <hr className='line'/>
                </div>
                     </div>   
                )}
            </div>
              <div>
                {showContainer10 && (
                    <div className='container2'>

                   <div>
                    <h1 className='heading2' onClick={toggleParagraph9}>How Certon's Web Development Differs from Others?</h1>
                    {showParagraph9 && (
                    <p className='paragraph1'>By offering customized solutions, focusing on user experience, leveraging cutting-edge technologies, and providing ongoing support, Certon sets itself apart in the field of web development. Our commitment to client satisfaction and delivering high-quality websites distinguishes us from others in the industry.</p>                 )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph10}>Does Certon Ensure Any Security Measures for Web Applications?</h1>                  
                    {showParagraph10 && (
                    <p className='paragraph1'>Yes, Certon takes web application security seriously and implements various measures to ensure the safety and protection of web applications.
</p>                     )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph11}>What Support and Maintenance Measures Does Certon Offer for Web Applications?
</h1>               {showParagraph11 && (
                    <p className='paragraph1'>Certon provides comprehensive support and maintenance services for web applications to ensure their smooth functioning and optimal performance. Here are some of the support and maintenance measures offered by Certon. Bug Fixing and Issue Resolution, Performance Optimization, Technical Support, Troubleshooting, etc.
</p>                 )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph12}>Does Certon Ensure the Usability and User Experience of Web Applications?
</h1>                    {showParagraph12 && (
                    <p className='paragraph1'>Yes, Certon places great importance on ensuring the usability and user experience of web applications.
</p>             )}
                    <hr className='line'/>
                </div>
                        </div>
                )}
              </div>
           <div>
              {showContainer3 && (
                <div className='container2'>

<div>
                    <h1 className='heading2' onClick={toggleParagraph13} >Is There Any Timeline for the Recruitment Process with Certon?
</h1>                {showParagraph13 && (
                    <p className='paragraph1'>Yes, Certon follows a structured recruitment process with defined timelines.
</p>             )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph14}>Are There Any Methods for Certon to Ensure the Quality of Candidates?</h1>
                    {showParagraph14 && (
                    <p className='paragraph1'>Yes, Certon applies various methods to ensure the quality of candidates during the recruitment process. They are Resume Screening, Technical Assessments, Interviews, etc.</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph15}>How Can Certon Assist in Both Permanent and Temporary Staffing Needs?</h1>           
                    {showParagraph15 && (
                    <p className='paragraph1'>
Certon can assist in both permanent and temporary staffing needs by providing comprehensive staffing solutions tailored to the specific requirements of the clients.</p>         
)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph16}> How Does Certon Differ in Talent Acquisition and Recruitment Services Apart from Others?</h1>
                    {showParagraph16 && (
                    <p className='paragraph1'>Certon differs in talent acquisition and recruitment service apart from others by our expertise & experience, extensive network, careful screening and selection process, etc.</p>              
                     )}
                    <hr className='line'/>
                </div>
                    </div>
              )}
           </div>
           <div>
            {showContainer4 &&(
                <div className='container2'>

<div>
                    <h1 className='heading2' onClick={toggleParagraph37}>Why is performance management important?</h1>
                    {showParagraph37 && (
                    <p className='paragraph1'>It allows companies to optimize their processes and improve efficiency and productivity in the workplace.</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph38}>What is the purpose of performance management?</h1>
                    {showParagraph38 && (
                    <p className='paragraph1'>
Performance management's goal is to create an environment where people can perform to the best of their abilities and produce the highest-quality work most efficiently and effectively.</p>
)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph39}>What strategies are taken by certon to improve employee performance?</h1>
                    {showParagraph39 && (
                    <p className='paragraph1'>The strategies are clear goal setting, ongoing feedback and coaching, training and development programs, etc.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph40}>What evaluating measures are taken by certon to evaluate employee performance?
</h1>   {showParagraph40 && (
                    <p className='paragraph1'>The measures are performance appraisals, 360-degree feedback, project or task evaluations, client feedback, etc.
</p>)}
                    <hr className='line'/>
                </div>
                    </div>
            )}
           </div>
          <div>
            {showContainer5 &&(
                <div className='container2'>
                    <div>
                    <h1 className='heading2' onClick={toggleParagraph17}>What Employee Training and Development Programs Does Certon Offer?
</h1>        {showParagraph17 && (
                    <p className='paragraph1'>
Certon Offers various employee training and development programs such as technical skill development, soft skill development and leadership development programmes etc.</p> 
)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph18}>On What Basis Certon Sets the training needs of employees?
</h1> {showParagraph18 && (
                    <p className='paragraph1'>Certon sets the training needs based on employee skills, employee performance, organizational growth status and also based on other many factors.</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph19}>What Type of Training Solutions Does Certon Provide?</h1>          
                     {showParagraph19 && (
                    <p className='paragraph1'>Certon Provides various training solutions such as technical training, soft skills training, leadership and management training etc.</p>
                    )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph20}> Are There Any Methods for Certon to Ensure the Effectiveness of Training Programs?
</h1>         {showParagraph20 && (
                    <p className='paragraph1'>Certon ensures the effectiveness of training programs through experienced trainers, interactive learning, and with various assessment techniques.
</p>                 )}
                    <hr className='line'/>
                </div>
                    </div>
            )}
          </div>
          <div>
            {showContainer6 && (
                <div className='container2'>
                   <div>
                    <h1 className='heading2' onClick={toggleParagraph21}>What is the main purpose of organizational development?
</h1>{showParagraph21 && (
                    <p className='paragraph1'>The main purpose of organizational development is to improve the overall effectiveness and performance of an organization.
</p> )}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph22}>What is the difference between HR and OD?
</h1>{showParagraph22 && (
                    <p className='paragraph1'>OD focuses on strategic initiatives for employee development and HR is concerned with the day-to-day operational tasks related to managing employees.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph23}>What Organizational Development Services Does Certon Offer?
</h1>{showParagraph23 && (
                    <p className='paragraph1'>Certon Offers various organizational development services such as organizational assessment, team building and collaboration, and various employee engagement programs.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph24}>How Does Certon Support Organizations in Developing and Implementing Performance Management Systems?
</h1>  {showParagraph24 && (
                    <p className='paragraph1'>Through various activities such as training and development, implementation support, performance tracking, and evaluation etc.
</p> )}
                    <hr className='line'/>
                </div>
                </div>
            )}
          </div>
           <div>
            {showContainer7 &&(
                <div className='container2'>

<div>
                    <h1 className='heading2' onClick={toggleParagraph25}>What is the difference between branding and positioning?
</h1>{showParagraph25 && (
                    <p className='paragraph1'>Branding is about sticking out, being recognizable, and placing your brand on something (i.e., logo, colors). Positioning is helping your customers categorize your brand as the solution to a specific problem, want, or need.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph26}>What are the features of a brand?
</h1>{showParagraph26 && (
                    <p className='paragraph1'>Name and logo, brand identity, brand positioning, brand personality, brand promise, etc.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph27}>How does certon help to establish a brand?
</h1> {showParagraph27 && (
                    <p className='paragraph1'>By providing various branding services and strategies
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph28}> How does brand positioning help in businesses?
</h1>    {showParagraph28 && (
                    <p className='paragraph1'>Brand positioning plays a crucial role in businesses as it helps create a unique and distinct identity in the minds of consumers.
</p>)}
                    <hr className='line'/>
                </div>
                    </div>
            )}
           </div>
          <div>
            {showContainer8 && (
                <div className='container2'>

<div>
                    <h1 className='heading2' onClick={toggleParagraph29}>How Certon can Assist in Conducting Market Research for Businesses?
</h1> {showParagraph29 && (
                    <p className='paragraph1'>Certon assists in conducting market research for businesses through research planning, data collection, and data analysis, etc.</p>
)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph30}>What Market Research Services Does Certon Offer?
</h1>{showParagraph30 && (
                    <p className='paragraph1'>Certon offers various market research services such as market analysis, customer research, and competitor analysis, etc.
.</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph31}>How Does Market Analysis Benefit Businesses Growth?
</h1>{showParagraph31 && (
                    <p className='paragraph1'>The market analysis benefits a business's growth by identifying market opportunities, understanding customer needs, assessing the competitive landscape, etc.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph32}> How Does Certon Help in Identifying Target Audiences for a Business?
</h1>{showParagraph32 && (
                    <p className='paragraph1'>Certon helps through market research, audience segmentation and competitive analysis etc.
</p>)}
                    <hr className='line'/>
                </div>
                    </div>
            )}
          </div>
          <div>
            {showContainer9 && (
                <div className='container2'>

<div>
                    <h1 className='heading2' onClick={toggleParagraph33}>What is CRM?
</h1>{showParagraph33 && (
                    <p className='paragraph1'>Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph34}>How CRM helps businesses?
</h1>{showParagraph34 && (
                    <p className='paragraph1'>CRM helps businesses through customer data management, improved customer relationships, customer service, support, etc.</p>
)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph35}>How Certon's CRM strategy differs from others?
</h1> {showParagraph35 && (
                    <p className='paragraph1'>Certon's CRM strategy differs from others by providing customizable solutions, seamless integration with existing systems and processes, providing a user-friendly interface, etc.
</p>)}
                    <hr className='line'/>
                </div>
                <div>
                    <h1 className='heading2' onClick={toggleParagraph36}> What CRM software is used by Certon?
</h1>  {showParagraph36 && (
                    <p className='paragraph1'>Certon's CRM software options are based on client requirements. ie, regarding the client's needs, industry, and specific goals.
</p>)}
                    <hr className='line'/>
                </div>
                    </div>
            )}
          </div>
        </div>
       
    </div>
      
    </div>
  )
}

export default Faq
