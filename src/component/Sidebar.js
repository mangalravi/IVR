import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar position-fixed h-100">
      <div className="lfthdr d-flex align-items-center justify-content-between">
        {/* Use Link component from react-router-dom instead of anchor <a> */}
        <Link to="#" className="ugoone d-flex align-items-center">
          <img src="content/images/ugo-logo.svg" alt="ugo-logo" className="me-2" />
          <h2 className="m-0">UGO ONE</h2>
        </Link>
        <button className="border-0 bg-transparent tglbtn">
          <img src="content/images/toggler.svg" alt="toggler" />
        </button>
      </div>

      <nav>
        <ul className="list-unstyled m-0">
          <li>
            <Link href="#">
              <img src="content/images/Dashboard.svg" alt="Dashboard" />
              <span className="ms-14">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="content/images/manage.svg" alt="Manage Entity" />
              <span className="ms-14">Manage Entity</span>
            </Link>
          </li>
          <li className="d-flex align-items-start p-0">
            <div className="accordion accordion-flush w-100" id="accordionFlushExample">
              <div className="accordion-item bg-transparent">
                <button
                  className="custom-button accordion-button collapsed bg-transparent border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <img src="content/images/setting.svg" alt="Settings" />
                  <span className="ms-14">IVR Listing</span>
                </button>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <ul className="list-unstyled bg-transparent m-3 mb-0 parentul">
                    <li><a href="#">Manage Entity</a></li>
                    <li><a href="#">Manage Ticker Message</a></li>
                    <li><a href="#">Manage Document Type</a></li>
                    <li><a href="#">User Master</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="#">
              <img src="content/images/case.svg" alt="Case Update" />
              <span className="ms-14">Case Update</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="content/images/helpS.svg" alt="Help" />
              <span className="ms-14">Help</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
