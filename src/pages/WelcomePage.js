import React from 'react'
import "./WelcomePage.css"

function Profile() {
    return (
        <div class="container" >
        <header style={{boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",strokeOpacity:"0.8"}} class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a  class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" href='Profile'>
                <img style={{borderRadius: "50%"}} src="https://www.zarla.com/images/zarla-k-1x1-2400x2400-20211119-y8r6jygpdqy7qwr4bhcp.png?crop=1:1,smart&width=250&dpr=2" width="15%" height="15%"/> 
                <h2>LOGO</h2>
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">หน้าหลัก</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">เกี่ยวกับเรา</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">เทคโนโลยี AI</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">บริการ</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">ติดต่อเรา</a></li>
            </ul>

            <select name="cars" id="cars">
                <option value="Guest" selected>Guest</option>
                <option value="volvo">โหมดผู้ใช้ทั่วไป</option>
                <option value="saab">สมัครสมาชิก</option>
            </select>
            {/* <ul>
                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#" class="nav-link px-2 link-lightblue">
                    Guest
                    <i class="fa-solid fa-chevron-down"></i>
                    </a>
                        <ul className='dropdown'>
                            <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">โหมดผู้ใช้ทั่วไป</a></li>
                            <ul style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">สมัครสมาชิก</a>
                                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">สมัครสมาชิก</a></li>
                                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">Logout</a></li>
                            </ul>
                        </ul>
                    </li>
            </ul> */}
            
        </header>
        <div className='main-containers' >
            <h5>UNTIRED</h5>
            <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
            <p>“ท่านไม่ต้องเสียเวลาและทรัพยากรในการทดลองผิดพลาดและทำลายพืชอีกต่อไป ให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อการตัดสินใจที่แม่นยำและปลอดภัย เริ่มเพิ่มประสิทธิภาพในการเกษตรของคุณด้วยโดรนบินสำรวจเราวันนี้ ”</p>
        <div className='symbol'>
            <img width={"20"} src='https://e1.pngegg.com/pngimages/383/600/png-clipart-icone-de-fleche-icone-inferieure-icone-vers-le-bas-icone-vers-le-bas-icone-de-navigation-ligne-main.png'/>
            <br/>
            <img width={"15"} src='https://e1.pngegg.com/pngimages/383/600/png-clipart-icone-de-fleche-icone-inferieure-icone-vers-le-bas-icone-vers-le-bas-icone-de-navigation-ligne-main.png'/>
        </div>
        </div>
        
        <article className='left-container'>
            <h2>คำอธิบายต่างๆ Interface</h2>
            {/* <img src="3.jpg"/> */}
        </article>
            <section className='right-container'>
                <h2>บริการของพวกเรา ?</h2>
                <p>ท่านสามารถเพิ่มประสิทธิภาพการเกษตรของคุณได้ด้วยเทคโนโลยีของเรา 
                    โดรนบินสำรวจของเราจะช่วยท่านทำนายพื้นที่ที่เหมาะสมในการปลูกพืชและพืชที่ควรปลูกอย่างไรให้เหมาะกับสภาพแวดล้อม 
                    ด้วยการสแกนและวิเคราะห์ข้อมูลที่รวบรวมจากโดรนบินสำรวจเรา ท่านจะได้รับข้อมูลที่แม่นยำเกี่ยวกับปริมาณน้ำ, สภาพดิน, 
                    และสภาพอากาศที่ช่วยให้การเกษตรของท่านประสบความสำเร็จ</p>
                <div className="btn-1">
                    <button 
                            class="w-30 btn btn-lg btn-success" 
                            type="submit">
                            <a class="w-100 btn btn-s btn-success" href="Login">เข้าสู่ระบบ</a>
                    </button> 
                </div> 
                <div className="btn-2">
                    <button 
                            class="w-30 btn btn-lg btn-primary"
                            type="submit">
                            <a class="w-100 btn btn-s btn-primary" href="Register">สมัครสมาชิก</a>
                    </button>
                </div>
            </section>
        
        <footer className="foot-container"> 
            <img width={"15"} src='https://e1.pngegg.com/pngimages/383/600/png-clipart-icone-de-fleche-icone-inferieure-icone-vers-le-bas-icone-vers-le-bas-icone-de-navigation-ligne-main.png'/>
            <p >our Services</p>
            <h3>แพ็คเกจทั้งหมด</h3>
            <div className='service' >
                <div className='pack-1'>
                    <img width={"26%"} src='https://cdn.iconscout.com/icon/free/png-256/free-magic-wand-tool-1574983-1331321.png?f=webp'></img>
                    <h4>แพ็คเกจ 1</h4>
                    <p>คำอธิบายต่างๆ</p>
                    <br/>
                </div>
                <div className='pack-2'>
                    <img width={"30%"}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKraNHQ7NGjAztYflmQjzr4QCRJfiM4gkhtg&usqp=CAU'></img>
                    <h4>แพ็คเกจ 2</h4>
                    <p>คำอธิบายต่างๆ</p>
                    <br/>
                </div>
                <div className='pack-3'>
                    <img width={"30%"} height={"30%"} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEX///8AAAC9vb3w8PCtra3r6+vNzc2goKBnZ2dgYGD39/fZ2dnQ0NCKioosLCx2dnY6OjomJiYgICC7u7vHx8cF5jc1AAAEBklEQVR4nO2d2ZIjIQwE2fWcnvv4/2/d95UjGqgUMo7K526bDo+zDBJMa8YYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDE3wSlwrh4Sy8OfwGP1mFje4hPeV4+J5Ss84Ff1kFju40f4Vj0mlrv4hA/VY2J5jk9YPSSY+IDP1UNiuZAVd9VjYnFWbI+zYn+cFdvjrNif7/CA39VDYtkjK/4GfrrvPc6Kn/jy8PhnBvnbffNxVvyWq+gljmBgkSXeHLLiMV7zQj7AEef4/k/9d3dlxVO8aOVS3Gd49/eBu/uy4j1c9ImN/5CPOMTTwO1984pTfJMP6gGOuGCZ14Hbe7PiNV63yDaaZQbmFVW20SzTRuYVRbbRLNOG5hUlthEtMzavqLCNaJk2OK9YbxvVMm10DWq1bWTLjM8rFttGtszEGtRS28iWaRNrUCtto1umzaxBrbMNYJm5NahVtgEs0ybXoBbZBrBMm61XLLENYZnpNagVtkEsM1+vyLcNYpkm1CuybcNYpin1imTbMJbR6hWptmEs07R6RaZtIMs0sbadZxvKMnK9Iss2mGX02naSbSjLNKC2nWIbzDINqG1n2IazDFLb5m3DWaYxtW3aNqBlGlTbhm0DWgarbaO2IS2D9UGRtiEt07g+KM42qGUa2AdF2Ya1DNoHBdkGtUxj+6AQ27CWaWzPLGEb2DJ0H5RuG9oyeM+sahvaMo3vmRVtQ1umJfTMSrbBLZPRM6vYBrdMS+mZnbfNhS+hvqiVsb/iwp9a51cx4TPM6JlVEoP/Hibsr9BSH3dpwv4K7Zcbnofx9dT9Feqvb/g3DZ8V+gyKtQ2eFcQsGLUNnRXMSgZoGzwrmNWoK6pX/A+1osjZBs4KblUYs018HSUryJV9yDZsVrDVGcY2bFawFTbGNuhePLpKStgGzQq+0g3YhsyKjG4F3TZgVuR0nKzcX3FETteQapvrq1cERNtwWZHXvafZBptXZHZgKrbBsiK3i1awDZYVuZ3Qgm2orMjuZp+3TbxxKivydyTM2gbKihW7SiZtw2TFmp1Bc7ZhsmLN7q4p2zBZsWqH3oxtkKxYt8tywjZEVqzcKTtum3jDcFas3e08ahsiK9buWB+1DZAVq08dGLSNnhXrT44Yso2eFRWnf4zYRs6KmhNcBmxznfsrDhmwTbxyLCuqTlLqto2aFXWnYfXaRsyKujOGum2jZUXlOVGdthGzovSsrz7baFlRfF5bl22krKg+c6/r3MR4RX9W1J+b2HH2pZQVV3D25TE+Z3Z79jhnVsFnku+PkhVb4DPJ98f/v2J7nBX746zYHmfF9tx+VlxYZLmxrDjHfzFaPSRjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYhn/5Iy4SVVQtEQAAAABJRU5ErkJggg=='></img>
                    <h4>แพ็คเกจ 3</h4>
                    <p>คำอธิบายต่างๆ</p>
                    <br/>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Profile