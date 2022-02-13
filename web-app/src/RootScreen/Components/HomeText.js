/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { makeStyles} from "@material-ui/core";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Button from '@mui/material/Button';


const useStyle = makeStyles({

  BrandHeading: {
    fontFamily: "Ubuntu",
    fontSize: "30px",
    marginTop: "20px",
    marginBottom: "10px",
    lineHeight: "1.1",
    fontWeight: "700",
    color: "#333333",
  },
  BrandPara: {
    color: "#666666",
    fontSize: "18px",
    padding: "0 0 25px",
    margin: "0px",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
  buttonParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "35px"
  }
  ,
  buttonChild: {
    backgroundColor: "#b6722d",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#b6722d",
    },
  },
});

const HomeText = () => {
  const classess = useStyle()
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="col-md-9">
        <div >
          <h2 className= {classess.BrandHeading}>
            About <br />
            Al Jamiatul Ashrafia
          </h2>
        </div>
        <div>
          <p className= {classess.BrandPara}>
            For the continuity of the mission of Ghaus-ul-'Ālam
            Mehboob-e-Yazdāni Hazrat Makhdoom Sultān Syed Ashraf Jahāngeer
            Simnāni (Radi Allāhu 'Anhu) and for the unity & revival of the
            Muslim Ummah, Shehzada-e-Ghaus-e-A'zam Shaykh-ul-Mashāykh
            Ustād-ul-'Ulama Khatīb-e-A'zam Hadhrat 'Allāma Syed Shāh Muhammad
            Ashraf Kaleem Ashrafi Al-Jilāni (Madda Zillahul 'Aali) - Sajjada
            Nasheen Dargah Makhdoom Ashraf Jais Sharīf India - initially
            endeavored through Dars-o-Tadris (teachings) in Jamia Na'eemia
            Murababad. This took an organizational structure during his stay in
            Mauritius on 11 April 1977 and it was named Al-Jāmiāt-ul-Ashrafiya,
            for which Al-Haaj Muhammad Rafiq 'Abdul Kareem Ashrafi was chosen as
            chairman.
          </p>
        </div>
        {show ? (
          <>
            <div>
              <p className= {classess.BrandPara}>
                To extend the wings of Al-Jāmiāt-ul-Ashrafiya internationally a
                branch was opened in Indonesia in year 2013. Branches were
                further opened in Pakistan (Karachi) on 5th January 2018 and in
                Bangladesh on 9th April 2018 respectively, thus giving the
                mission a worldwide boost.
              </p>
            </div>
            <div>
              <p className= {classess.BrandPara}>
                Today Al-Jāmiāt-ul-Ashrafiya is functioning, not just in India,
                Bangladesh and Pakistan but also in European countries like
                France and U.K (London) etc and is rendering its services
                satisfactorily.
              </p>
            </div>
            <div>
              <div className= {classess.BrandPara} className="row m-2 mb-4" >
                <div
                  style={{
                    color: "#666666",
                    fontSize: "18px",
                  }}
                  className="col-md-2"
                >
                  <b> Chief Patron: </b>
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "18px",
                  }}
                  className="col-md-9"
                >
                  Khatib-e-A'zam 'Allama Syed Muhammad Ashraf Kaleem Ashrafi
                  Al-Jilāni (Sajjada Nasheen Dargah Makhdoom Ashraf Jais Shareef
                  U.P India)
                </div>
              </div>
              <div className= {classess.BrandPara} className="row m-2 mb-4">
                <div
                  style={{
                    color: "#666666",
                    fontSize: "18px",
                  }}
                  className="col-md-2"
                >
                  <b> Patron: </b>
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "18px",
                  }}
                  className="col-md-9"
                >
                  Jamal-e-Millat Allama Syed Shah Ahmed Jamal Ashraf Ashrafi
                  Al-Jilāni (Wali-e-Ahad Dargah Makhdoom Ashraf Jais Shareef U.P
                  India)
                </div>
              </div>
              <div className= {classess.BrandPara}  className='row m-2 mb-4'>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "18px",
                  }}
                  className="col-md-2 "
                >
                  <b> Guidance: </b>{" "}
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "18px",
                  }}
                  className="col-md-9"
                >
                  Muhaqqiq-e-'Asr Hazrat 'Allama Dr Prof Syed Aleem Ashraf
                  Ashrafi Al-Jilani Jaisi <br />
                  (Head Of Department Of Arabic Mawlana Azad national Urdu
                  University)
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className={classess.buttonParent}>
          <Button 
            className={classess.buttonChild}
            onClick={() => setShow(!show)}
          > 
            {show ? (
              <>
                <span>Show less</span> <AiOutlineArrowUp style={{ fontSize: "20px" }} />
              </>
            ) : (
              <>
                <span>Show more</span><AiOutlineArrowDown style={{ fontSize: "20px" }} /> 
              </>
            )}
          </Button>
        </div>

        <div>
          <h2 className={classess.BrandHeading}>Mission</h2>
        </div>
        <div>
          <p className={classess.BrandPara}>
            To unite people at a point where they are raised in awareness of
            Sharī'at and Tarīqat, guided towards Allāh (Subhānahu Wa Ta'āla),
            enriched with the love of Rasoolullah صلى الله عليه وسلم ,set on the
            path of the purification of the heart, thus helping them to live in
            accordance to Islām.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeText;