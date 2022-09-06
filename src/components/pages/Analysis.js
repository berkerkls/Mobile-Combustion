import React from 'react'
import * as GıIcons from "react-icons/gi"

export default function Analysis() {
  return (
    <>
      <header className='header-box'>
        <div className='container'>
          <h2>Merhaba Murat Bey,</h2>
          <p>Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana tıklayarak erişim sağlayabilirsiniz. </p>
        </div>
      </header>

      <div className='mobile-combustion'>
          <div className='header-combustion'>
            <GıIcons.GiWorld size={30} />
             <h1>Mobile Combustion</h1>
          </div>
          <div className='combustion-forms'>
              <div className='input-part'>
                  <h3>Girdi Alanı</h3>
                  <p>Lütfen salını değerlerini hesaplamak için aşağıdaki alanları doldurun.</p>
                <form className='input-form'>
                  <div className='select-input'>
                    <label for= "facility"> Facility ID</label>
                    <select name='ids' id='facility'>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                    </select>
                  </div>
                  <div className='select-input'>
                    <label for= "year"> Year</label>
                    <select name='ids' id='year'>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                    </select>
                  </div>
                  <div className='select-input'>
                    <label for= "activity-type"> Activity Type</label>
                    <select name='ids' id='activity'>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                    </select>
                  </div>
                  <div className='select-input'>
                    <label for= "source"> Faul Source</label>
                    <select name='ids' id='source'>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                    </select>
                  </div>
                  <div className='select-input'>
                    <label for= "vehicle"> Vehicle Type</label>
                    <select name='ids' id='vehicle'>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                    </select>
                  </div>
                  <div className='select-input'>
                    <label for= "activity-amount"> Amount of Activity</label>
                    <select name='ids' id='activity-amount'>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                      <option value="#">#</option>
                    </select>
                  </div>
                </form>
              </div>

              <div className='output-part'>
                  <h3>Sonuç Alanı</h3>
                  <p>Girdi alanında girdiğiniz değerlere göre salınan gaz miktarları aşağıdaki gibidir.</p>
                  <ul className='output-list'>
                    <li className='elements'>
                      <span>CO<sub>2</sub></span>
                      <li>#</li>
                    </li>
                    <li className='elements'>
                      <span>CH<sub>4</sub></span>
                      <li>#</li>
                    </li>
                    <li className='elements'>
                      <span>N<sub>2</sub>O</span>
                      <li>#</li>
                    </li>
                    <li className='elements'>
                      <span>CO<sub>2</sub>e</span>
                      <li>#</li>
                    </li>
                  </ul>
                  <div className='button-area'>
                    <input type="submit" value="Sıfırla" />
                    <input type="submit" value="Kaydet" />
                  </div>
              </div>
          </div>
      </div>

    </>
  )
}