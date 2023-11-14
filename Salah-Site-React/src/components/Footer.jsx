import React from 'react';

function Footer() {
  return (
   <footer>
        <div class="footer">
          <div id="button"></div>
          <div id="container">
            <div id="cont">
              <div class="footer_center">
                <h3 class="links-media"> © 2023 All Rights Reserved</h3>
                <NavLink className="legal" to="/credits">credits</NavLink>
               <NavLink className="legal" to="/impressum">impressum</NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
export default Footer