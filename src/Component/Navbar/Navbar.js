import React, {useState} from 'react';

import "./Navbar.css" 

const Navbar=()=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <header>
        <div className="container">
          
        <input type="checkbox" name="" id="check" checked={isChecked} onChange={handleCheckboxChange} />

          <div className="logo-container">
          <h3 className="logo">Certon</h3>
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link" style={{ '--i': '.6s' }}>
                  <a href="/">MEN</a>
                  <div className='container'>
                  <div className='cart'>
                    <div className='container1'>
                   <div>
                   <h1 className='heading'>TopWear</h1>
                   
                   <ul>
                     <li>
                       <a href="/T-Shirts" className='link'> T-Shirts</a>
                     </li>
                     <li>
                       <a href="/casualshirts" className='link'>Casual Shirts</a>
                     </li>
                     <li>
                       <a href='/formalshirts' className='link'>Formal Shirts</a>
                     </li>
                     <li>
                      <a href="/sweatshirts" className='link'>Sweatshirts</a>
                     </li>
                     <li>
                      <a href='/sweaters' className='link'>sweaters</a>
                     </li>
                     <li>
                      <a href='/jokets' className='link'>Jockets</a>
                     </li>
                     <li>
                      <a href="/suits" className='link'>Suits</a>
                     </li>
                   </ul>
                   <hr className='line'/>
                   <h1 className='heading'>Indian & Festive wear</h1>
                   <ul>
                    <li>
                      <a href='/kurtas' className='link'>Kurtas & kurta set</a>
                    </li>
                    <li>
                      <a href='/shetwanis' className='link'>Shewwanis</a>
                    </li>
                    <li>
                      <a href='/nehru' className='link'>Nehru jacket</a>
                    </li>
                    <li>
                      <a href='/dhotis' className='link'>Dhotis</a>
                    </li>
                   </ul>
                   </div>
                   <div className='container2'>
                    <h1 className='heading'>BottomWear</h1>
                    <ul>
                      <li>
                        <a href='/jeans' className='link'>Jeans</a>
                      </li>
                      <li>
                        <a href="/casualtrousers" className='link'> Casual Trousers</a>
                      </li>
                      <li>
                        <a href='/formaltrousers' className='link'>Formal Trousers</a>
                      </li>
                      <li>
                        <a href="/shorts" className='link'>Shorts</a>
                      </li>
                      <li>
                        <a href='/joggers' className='link'>Joggers</a>
                      </li>
                    </ul>
                    <h1 className='heading'>Footwear</h1>
                    <ul>
                      <li>
                        <a href='/casualshoes' className='link'>Casual Shoes</a>
                      </li>
                      <li>
                        <a href='/shopts' className='link'>shopts shoes</a>
                      </li>
                      <li>
                        <a href='/formalshoes' className='link'>Formal Shoes 

                        </a>
                      </li>
                      <li>
                        <a href='/sneakers' className='link'>sneakers</a>
                      </li>
                    </ul>
                   </div>
                   <div className='container2'>
                    <h1 className='heading'>sports & active wears</h1>
                    <ul>
                      <li>
                        <a href='/sport' className='link'>sport shoes</a>
                      </li>
                      <li>
                        <a href='/sandals' className='link'>sport sandals</a>
                      </li>
                      <li>
                        <a href="/active" className='link'>active T-shirts</a>
                      </li>
                    </ul>
                   </div>
                    

                   </div>   
                 
               </div>
                  </div>
                </li>
                <li className="nav-link" style={{ '--i': '.6s' }}>
                  <a href="/women">WOMEN</a>
                   <div className='container'>
                    <div className='cart'>
                      <div className='container1'>
                        <div className='container2'>
                          <h1 className='heading'>indian & fusion wear</h1>
                          <ul>
                            <li>
                              <a href='/kurtas' className='link'>Kurtas & suits</a>
                            </li>
                            <li>
                              <a href='/kurtis' className='link'>
                                kurtis
                              </a>
                            </li>
                            <li>
                              <a href='/sarees' className='link'>sarees</a>
                            </li>
                            <li>
                              <a href='/ethnicwear' className='link'>Ethnic wear</a>
                            </li>
                            <li>
                              <a href='/leggings' className='link'>Leggings</a>
                            </li>
                            <li>
                              <a href="/dresses" className='link'>dresses</a>
                            </li>
                          </ul>

                        </div>
                        <div className='container2'>
                          <h1 className='heading'>western wear</h1>
                          <ul>
                            <li>
                              <a href='/dresses' className='link'>Dresses</a>
                            </li>
                            <li>
                              <a href="/Tops" className='link'>Tops</a>
                            </li>
                            <li>
                              <a href='/tshirts' className='link'>Tshirts</a>
                            </li>
                            <li>
                              <a href="/jeans" className='link'>jeans</a>
                            </li>
                          </ul>
                        </div>
                        <div className='container2'> 
                        <h1 className='heading'>sports & active wear </h1>
                          <ul>
                            <li>
                              <a href='/clothing' className='link'>Clothing</a>
                            </li>
                            <li>
                              <a href="/footwear" className='link'>Footwear</a>
                            </li>
                            <li>
                              <a href='/sports' className='link'>sports accessories</a>
                            </li>
                            <li>
                              <a href='/sportsEq' className='link'>sport equipment</a>
                            </li>
                          </ul>
                        </div>

                      </div>

                    </div>

                   </div>
                    
                </li>
                <li className="nav-link" style={{ '--i': '.6s' }}>
                  <a href="/kids">KIDS<i className="fas fa-caret-down"></i></a>
                  <div className='container'>
                    <div className='cart'>
                      <div className='container1'>
                        <div className='container2'>
                          <h1 className='heading'>Boys Clothing</h1>
                          <ul>
                            <li>
                              <a href='/tshirts' className='link'>T-Shirts</a>
                            </li>
                            <li>
                              <a href='/shirts' className='link'>shirts</a>
                            </li>
                            <li>
                              <a href="/shorts" className='link'>shorts</a>
                            </li>
                            <li>
                              <a href="/jeans" className='link'>jeans</a>
                            </li>
                            <li>
                              <a href='pary' className='link'>party wear</a>
                            </li>
                          </ul>
                        </div>
                        <div className='container2'>
                          <h1 className='heading'>girls clothing</h1>
                          <ul>
                            <li>
                              <a href="/dresses" className='link'>dresses</a>
                            </li>
                            <li>
                              <a href="/tops" className='link'>tops</a>
                            </li>
                            <li>
                              <a href="/tshirts" className='link'>Tshirts</a>
                            </li>
                            <li>
                              <a href="/clothingset" className='link'>Clothing Set</a>
                            </li>
                            <li>
                              <a href='/kurta set' className='link'>kurta Set</a>
                            </li>
                          </ul>
                        </div>
                        <div className='container2'>
                          <h1 className='heading'>footwear</h1>
                          <ul>
                            <li>
                              <a href='/casual' className='link'>casual shoes</a>
                            </li>
                            <li>
                              <a href='/flipflops' className='link'>flipflops</a>
                            </li>
                            <li>
                              <a className='link' href='/sandals'>sandals </a>
                            </li>
                            <li>
                              <a href='/heels' className='link'>Heels</a>
                            </li>
                            <li>
                              <a href="/socks" className='link'>socks</a>
                            </li>
                          </ul>

                        </div>

                      </div>

                    </div>

                  </div>
                </li>               
                
                <li className="nav-link" style={{ '--i': '1.35s' }}>
                  
                    <input type="text" className='input' placeholder='search for products,brands and more'/>
                   
                 
                </li>
              </ul>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main>
      <section>
          <div className></div>
        </section>
      </main>
    </div>
  );
}

export default Navbar;
