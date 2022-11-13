import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { setCacheNameDetails } from "workbox-core";

function Login({ setauthrole }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [data, setdata] = useState({});
  const [logged, setLogged] = useState();
  const [msg, setMsg] = useState("");
  const handleinput = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const handleloginsave = () => {
    console.log(data);

    fetch("https://eavluation4backend-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        if (res.msg == "Invalid Details") {
          console.log(res);
          setMsg(res.msg);
        } else {
          console.log(res);
          // setCacheNameDetails(res.name)

          setauthrole(true);
          onClose();
        }
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                ref={initialRef}
                onChange={handleinput}
                name="email"
                // value={logindata.email}
                placeholder="Email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                placeholder="Password"
                onChange={handleinput}
                name="password"
                // value={logindata.password}
              />
            </FormControl>
          </ModalBody>
          <p className="Errtext" style={{ color: "Red", margin: "auto" }}>
            {msg}
          </p>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleloginsave}
              //   onClick={handleloginsave}
              //   onClick={handleloginsave}
            >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [data, setdata] = useState({});
  const handleinput = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const handlesignupsave = () => {
    console.log(data);
    fetch("https://eavluation4backend-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Signup</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                name="name"
                onChange={handleinput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" name="email" onChange={handleinput} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                name="password"
                onChange={handleinput}
              />
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>Role</FormLabel>
              <Select placeholder="Role" onChange={handleinput}>
                <option value="customer">customer</option>
                <option value="Seller">Seller</option>
              </Select>
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlesignupsave}>
              Signup
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
const Navbar = () => {
  const navigate = useNavigate();
  const [authrole, setauthrole] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="header_first_row">
          <div className="header_first_row_first_section">
            <div className="logo" onClick="window.location.href = 'index.html'">
              <img
                className="logo_image"
                src="https://user-images.githubusercontent.com/101570365/201483800-2d7a53dd-2f95-402b-ab1c-fade4f6a0040.jpg"
              ></img>
            </div>
            <div
              className="text_inside_first_header_row"
              onClick="window.location.href = 'index.html'"
            >
              MEDICINES
            </div>
            <div className="text_inside_first_header_row">LAB TESTS</div>
            <div
              className="text_inside_first_header_row"
              onClick="window.location.href = 'AskDoctor.html'"
            >
              ASK DOCTOR
            </div>
            <div
              className="text_inside_first_header_row"
              onClick="window.location.href = 'covid.html'"
            >
              COVID19
            </div>
            <div
              className="text_inside_first_header_row"
              onClick="window.location.href = 'ayurved.html'"
            >
              AYURVEDA
            </div>
            <div
              className="text_inside_first_header_row"
              onClick="window.location.href = 'careplan.html'"
            >
              CARE PLAN
            </div>
            {/* </div> */}
            {/* <div className="header_first_row_second_section"> */}
            {!authrole ? (
              <div className="login_signup">
                <span
                  id="login_button"
                  //    onClick={<Login />}
                >
                  <Login setauthrole={setauthrole} />
                </span>{" "}
                |{" "}
                <span id="signup_button">
                  <Signup />
                </span>
              </div>
            ) : (
              <div className="login_signup">
                <span id="login_button">Logout</span> |{" "}
                <span id="signup_button">Create</span>
              </div>
            )}

            <div id="signup_modal" className="modal">
              {/* <!-- Modal content --> */}
              <div className="modal-content">
                <div className="modal_content_inner">
                  <div className="modal_first_section">
                    <img src="photos/Health-Related-Queries.png" />
                    <div className="modal_first_section_first_text">
                      Health Related Queries
                    </div>
                    <div className="modal_first_section_second_text">
                      Consult our certified doctors from anywhere, anytime and
                      for free. We guarantee your privacy.
                    </div>
                  </div>
                  <div className="modal_second_section">
                    <div className="login_close_btn" id="signup_close">
                      &times;
                    </div>
                    <div className="login_container">
                      <div className="login_heading_section">
                        <div className="login_first_heading">Sign Up</div>
                        <div className="login_second_heading">
                          Please enter your Mobile number to receive One Time
                          Password (OTP)
                        </div>
                      </div>
                      <div className="input_container">
                        <input
                          type="number"
                          className="login_input"
                          id="signup_number_input"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                      <div>
                        <button className="login_button">Continue</button>
                      </div>
                      <div className="login_bottom_content">
                        <div className="login_bottom_first_section">
                          <span>
                            <span className="login_bottom_first_section_first_text">
                              Have an account?
                            </span>
                            <span className="login_bottom_first_section_second_text">
                              Login
                            </span>
                          </span>
                          <span>
                            <span className="login_bottom_first_section_first_text">
                              For corporate signup.
                            </span>
                            <span className="login_bottom_first_section_second_text">
                              Click Here
                            </span>
                          </span>
                        </div>
                        <div className="login_bottom_second_section">
                          <div className="login_bottom_second_section_first_row">
                            By logging in, you agree to our
                          </div>

                          <div className="login_bottom_second_section_first_row">
                            <a>
                              <span className="terms_and_conditions_text">
                                Terms and conditions
                              </span>
                            </a>
                            &
                            <a>
                              <span className="privacy_policy_text">
                                Privacy policy
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="login_bottom_third_section">
                          <span>Need Help? Get In Touch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="login_modal" className="modal">
              {/* <!-- Modal content --> */}
              <div className="modal-content">
                <div className="modal_content_inner">
                  <div className="modal_first_section">Something</div>
                  <div className="modal_second_section">
                    <div className="login_close_btn" id="login_close">
                      &times;
                    </div>
                    <div className="login_container">
                      <div className="login_heading_section">
                        <div className="login_first_heading">Login</div>
                        <div className="login_second_heading">
                          Get access to your orders, lab tests & doctor
                          consultants
                        </div>
                      </div>
                      <div className="input_container">
                        <input
                          type="number"
                          className="login_input"
                          placeholder="Enter Mobile Number"
                          id="login_number_input"
                        />
                      </div>
                      <div>
                        <button className="login_button">LOGIN</button>
                      </div>
                      <div className="login_bottom_content">
                        <div className="login_bottom_first_section">
                          <span>
                            <span className="login_bottom_first_section_first_text">
                              New on 1mg?
                            </span>
                            <span className="login_bottom_first_section_second_text">
                              Sign Up
                            </span>
                          </span>
                          <span>
                            <span className="login_bottom_first_section_first_text">
                              Have a corporate account?
                            </span>
                            <span className="login_bottom_first_section_second_text">
                              Click Here
                            </span>
                          </span>
                        </div>
                        <div className="login_bottom_second_section">
                          <div className="login_bottom_second_section_first_row">
                            By logging in, you agree to our
                          </div>

                          <div className="login_bottom_second_section_first_row">
                            <a>
                              <span className="terms_and_conditions_text">
                                Terms and conditions
                              </span>
                            </a>
                            &
                            <a>
                              <span className="privacy_policy_text">
                                Privacy policy
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="login_bottom_third_section">
                          <span>Need Help? Get In Touch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offers"
              onClick="window.location.href = 'offers.html'"
            >
              Offers
            </div>
            <div
              className="cart_icon"
              id="cart_icon"
              onClick="window.location.href = 'cart.html'"
            ></div>
            <div
              className="help"
              onClick="window.location.href = 'NeedHelp.html'"
            >
              Need Help?
            </div>
          </div>
        </div>
        <div className="header_second_row">
          <div className="header_second_row_first_section">
            <div className="city_list">
              <div className="navigation_icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <input
                type="text"
                className="cities_input"
                placeholder="Enter your city"
              />
              <div className="locator_icon"></div>
            </div>
            <div className="search_box">
              <input
                type="text"
                className="search_input"
                placeholder="Search for Medicines and Health Products"
                id="search_input"
                onKeyPress="findme()"
              />
              <span className="navigation_icon">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
          <div className="header_second_row_second_section">
            <div className="discount_icon">
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg" />
            </div>
            <div className="discount_tag">
              QUICK BUY! Flat 25% off on medicines*
            </div>
            <button className="upload">Upload</button>

            <div></div>
          </div>
        </div>
        <div className="header_third_row">
          <div className="drop_down">
            All Medicines{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Medicine by theropatic className
              </ul>
            </div>
          </div>
          <div className="drop_down">
            Winter care <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Body & Skin Care
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Hair & Scalp Care
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Cough & Cold
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Fever & Headache
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Vaporizer & Nebulizer
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Heating Aid
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Winter Combos
              </ul>
            </div>
          </div>
          <div className="drop_down">
            Featured <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              Tata 1mg Health Products
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Trending Products
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Expoler Somethig New
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Buy More, Save More
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Vaccations
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Min 33% Off
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Combos
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Deal Of The Day
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Top Brands
                <li className="dropdown_second_heading">GOQii</li>
                <li className="dropdown_second_heading">Organic India</li>
                <li className="dropdown_second_heading">Accu-check</li>
                <li className="dropdown_second_heading">Dr. Morepen</li>
                <li className="dropdown_second_heading">Himalaya Products</li>
                <li className="dropdown_second_heading">Abbott Nutrition</li>
              </ul>
            </div>
          </div>
          <div className="drop_down">
            Covin Essentials{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Boost Your Imunity
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Chyawanprash
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Sanitizer & Hand Wash
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Mask
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Thermometer
              </ul>
            </div>
          </div>
          <div className="drop_down">
            Fitness & Supplements{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Vitamins & Supplements
                <li
                  className="dropdown_second_heading"
                  onClick="window.location.href = 'multivitamins.html'"
                >
                  Multivitamins
                </li>
                <li
                  className="dropdown_second_heading"
                  onClick="window.location.href = 'vitamins_A-Z.html'"
                >
                  Vitamins A-Z
                </li>
                <li
                  className="dropdown_second_heading"
                  onClick="window.location.href = 'MineralSupplements.html'"
                >
                  Mineral Supplements
                </li>
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Nutritonal Drinks
                <li className="dropdown_second_heading">
                  Adult Daily Nutrition
                </li>
                <li className="dropdown_second_heading">Kid Nutrition</li>
                <li className="dropdown_second_heading">For Women</li>
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Health food & Drinks
                <li className="dropdown_second_heading">
                  Green Tea & Herbal Tea
                </li>
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Protien Supplements
                <li className="dropdown_second_heading">Whey Protien</li>
                <li className="dropdown_second_heading">Amino Acid</li>
                <li className="dropdown_second_heading">Mass Gainer</li>
                <li className="dropdown_second_heading">Workout Essential</li>
                <li className="dropdown_second_heading">Fat Burner</li>
              </ul>
              <ul className="dropdown_first_heading">
                Omega & Fish oil
                <li className="dropdown_second_heading">Fish Oil</li>
                <li className="dropdown_second_heading">Cod Liver Oil</li>
                <li className="dropdown_second_heading">Flax Seed Oil</li>
              </ul>
              <ul className="dropdown_first_heading">
                Speciality Supplements
                <li className="dropdown_second_heading">Green Supplements</li>
                <li className="dropdown_second_heading">Beauty supplements</li>
                <li className="dropdown_second_heading">Pre & Probiotics</li>
                <li className="dropdown_second_heading">Glucosamina</li>
                <li className="dropdown_second_heading">Collagen</li>
                <li className="dropdown_second_heading">Antioxidents</li>
                <li className="dropdown_second_heading">Biotin</li>
              </ul>
              <ul className="dropdown_first_heading">
                Weigth Management
                <li className="dropdown_second_heading">
                  Weigth Management Herbs
                </li>
              </ul>
            </div>
          </div>
          <div className="drop_down">
            Diabetes <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Device
                <li className="dropdown_second_heading">
                  Blood Glucose Moniter
                </li>
                <li className="dropdown_second_heading">
                  Test Strip & Lancets
                </li>
                <li className="dropdown_second_heading">Syrings & Pens</li>
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Diabitic Medicines
                <li className="dropdown_second_heading">
                  Vitamins,Minerals & Antioxidents
                </li>
                <li className="dropdown_second_heading">
                  Homeopathy Medicines
                </li>
                <li className="dropdown_second_heading">Ayurvedic Medicines</li>
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Sugar Subsitutes
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Diabetic Diet
                <li className="dropdown_second_heading">Juices & vinegars</li>
                <li className="dropdown_second_heading">SuperFoods</li>
              </ul>
              <ul
                className="dropdown_first_heading"
                style={{ listStyleType: "none" }}
              >
                Diabetic Foot Health
              </ul>
            </div>
          </div>
          <div className="drop_down">
            Healthcare Device{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="drop_down_content">
              <ul className="dropdown_first_heading">
                Masks(N95, Surgical & More
              </ul>
              <ul className="dropdown_first_heading">BP Monitors</ul>
              <ul className="dropdown_first_heading">
                {" "}
                Nebulizers & Vaporizers
              </ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
            </div>
          </div>
          <div className="drop_down">
            Personal Care{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className="drop_down">
            Health Condition{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className="drop_down">
            Ayurveda Products{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className="drop_down">
            Homeopathy <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
