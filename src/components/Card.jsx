import "./card.css";

import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="12">
            <div id="content">
              <ul className="timeline-1 text-black">
                <li className="event" data-date="Oct 22 - Feb 23">
                  <h4 className="mb-3">Steward at Stadslab Rotterdam</h4>
                  <p>Rotterdam, Netherlands</p>
                  <p className="timeline-description">
                    Stabslab is a makelab that provides students with 3D
                    printers, laser cutters, embroidery machines, welding
                    stations, and many more machines to allow students to create
                    products/designs and prototypes. I worked as a steward
                    assisting during teaching workshops and helping students use
                    the machines.
                  </p>
                </li>
                <li className="event" data-date="Sep 21 - Jan 22">
                  <h4 className="mb-3 pt-3">
                    UX and Frontend Developemnt Internship at FontoXML
                  </h4>
                  <p>Rijswijk, Netherlands</p>
                  <p>
                    Designed, prototyped and developed a help center for end
                    users using Fontos XML Editor.
                  </p>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="12">
            <div id="content">
              <ul className="timeline-1 text-black">
                <li className="event" data-date="2019-ongoing">
                  <h4 className="mb-3">
                    HBO Bachelor ICT & Media Design, Fontys University of
                    Applied Sciences
                  </h4>
                  <p>Eindhoven, Netherlands</p>
                  <p>
                    Get here on time, it's first come first serve. Be late, get
                    turned away.
                  </p>
                </li>
                <li className="event" data-date="2019">
                  <h4 className="mb-3 pt-3">
                    American High School Diploma, Rabat American School
                  </h4>
                  <p>Rabat, Morocco</p>
                  <p>
                    Get ready for an exciting event, this will kick off in
                    amazing fashion with MOP &amp; Busta Rhymes as an opening
                    show.
                  </p>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
