import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";

import Nav from './nav';

export default class HomeOff extends React.Component {
    

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
      var scrollpos = window.scrollY;
      var header = document.getElementById("header");
      var navcontent = document.getElementById("nav-content");
      var navaction = document.getElementById("navAction");
      var brandname = document.getElementById("brandname");
      var toToggle = document.querySelectorAll(".toggleColour");
      scrollpos = window.scrollY;

    if(scrollpos > 10){
      header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");
    //Use to switch toggleColour colours
      for (var i = 0; i < toToggle.length; i++) {
       toToggle[i].classList.add("text-gray-800");
     toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
    }
    else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    //Use to switch toggleColour colours
      for (var i = 0; i < toToggle.length; i++) {
       toToggle[i].classList.add("text-white");
     toToggle[i].classList.remove("text-gray-800");
    }
    
    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
    
    }


       // console.log(event);
        /*let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);

        this.setState({
          transform: itemTranslate
        });*/
    }

  render() {
    return (
      <div className="leading-normal tracking-normal text-white gradient" style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
        {/*Nav*/}
        <Nav/>
        {/*Hero*/}
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/*Left Col*/}
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <br />
              <br />
              <br />
              <br />
              <p className="uppercase tracking-loose w-full" />
              <h1 className="my-4 text-5xl font-bold leading-tight">every codebase tells a story</h1>
              <p className="leading-normal text-2xl mb-8">we help you tell it better.</p>
              <br />
              <br />
              <br />
              <br />
            </div>
            {/*Right Col*/}
            <div className="w-full md:w-3/5 py-6 text-center">
              {/* <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-black-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <span>Subscribe</span>
</button>

    
  </div>
</form> */}
              {/*     <img class="w-full md:w-4/5 z-50" src="hero.png"> */}
            </div>
          </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003" />
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
              </g>
            </g>
          </svg>
        </div>
        <section className="bg-white border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">What we do?</h1>
            <div className="w-full mb-4"> 
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">CodeStory Video</h3>
                <p className="text-gray-600 mb-8">We create an interactive video for you that navigates through your github repository's commit history. If the number of changes/commits are huge, our algorithm will handle it and prioritize only the important files. <br /><br />
                  <a className="text-orange-500 underline" href="#">Know More</a></p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <svg className="w-full sm:h-64 mx-auto" id="a5f41e37-d8d4-4d60-9e97-29ee7ebe1bc1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="845.7243" height="704.03133" viewBox="0 0 845.7243 704.03133"><g id="f1503154-f50a-4680-8aa4-587be41cac87" data-name="Group 2"><path id="a9e5a31c-10e6-4175-9779-4994367672f7" data-name="Path 4" d="M880.72383,762.75434l-1.464,19.525-29.773-9.762,12.2-14.643Z" transform="translate(-177.13785 -97.98434)" fill="#feb8b8" /><path id="f499a4aa-6a35-40fc-8432-e4c7ab26d048" data-name="Path 5" d="M989.08286,756.40934l-1.467,19.035-16.595,2.441-9.762-9.274,11.226-18.06Z" transform="translate(-177.13785 -97.98434)" fill="#feb8b8" /><path id="fb70bf31-eafd-4d8a-8310-5130d8d104e1" data-name="Path 6" d="M1001.28487,513.33633s13.179,15.619-3.417,39.536-36.607,47.346-36.607,47.346l-37.1,70.286s-19.036,68.822-23.429,70.774-6.833-5.857-4.393,2.44.976,7.81-.976,8.3-7.321-.488-5.369,2.929,3.417,3.417-.488,3.417-5.369-2.44-5.369.976-3.417,11.226-3.417,11.226-23.917-6.833-24.893-9.762,6.345-4.393,4.881-7.321-1.952-2.929-1.952-7.321,2.929-5.369,2.929-5.369,2.44-.976,1.464-2.929-4.881-.976,0-3.417,24.895-77.121,24.895-77.121,0-37.1,6.345-49.3,1.464-99.084,16.6-100.06S1001.28487,513.33633,1001.28487,513.33633Z" transform="translate(-177.13785 -97.98434)" fill="#2f2e41" /><path id="a89455c2-275d-4b70-b13c-192fbe474176" data-name="Path 7" d="M996.40382,541.15733l-2.929,75.655s14.643,73.215,9.762,95.667-1.464,19.524-4.393,23.429-5.369,1.952-2.929,5.369,3.9,4.393,0,8.3-5.857,13.179-5.857,13.179l-24.893-2.44s6.345-11.226,3.9-13.667-8.786,1.464-3.9-3.9,7.81-2.929,4.881-5.369-7.321-1.464-3.417-5.369,8.3-3.9,4.393-5.369-8.3,0-6.345-2.929,4.393-6.345,4.393-6.345l-5.857-44.417s-6.833-14.643-4.881-20.988-8.3-58.572-8.3-58.572Z" transform="translate(-177.13785 -97.98434)" fill="#2f2e41" /><path id="a3024be5-ad86-493a-9bfb-258ab58160a1" data-name="Path 8" d="M985.66786,766.17034s4.881-4.881,6.345-1.952,12.2,29.286,5.857,31.238-15.619,3.9-20.5,2.44-15.131-8.3-27.333-8.3-22.452-5.369-22.452-7.321-1.952-13.667,7.321-13.667,26.357-10.738,26.357-10.738,3.9-7.81,5.857-7.321.488,16.107.488,16.107S978.83186,777.39635,985.66786,766.17034Z" transform="translate(-177.13785 -97.98434)" fill="#2f2e41" /><path id="a57c92ce-496a-44de-934b-3ddd78679762" data-name="Path 9" d="M877.30785,772.51535s4.393-10.738,8.786-8.3,1.464,32.7,1.464,32.7-3.9,6.345-15.131,4.881-41-4.881-47.834-3.417-25.381-6.833-20.5-18.06c0,0,2.44-6.345,14.155-5.857s33.191-13.667,33.191-13.667,3.417-9.762,4.393-8.786,1.952,18.06,1.952,18.06S870.47484,778.37235,877.30785,772.51535Z" transform="translate(-177.13785 -97.98434)" fill="#2f2e41" /><circle id="fa315d33-3eeb-4d45-ab88-aeb0e9694c5a" data-name="Ellipse 2" cx="764.11101" cy="196.19599" r="28.31" fill="#feb8b8" /><path id="fbae87ba-2986-46ef-9932-134b7e0cae24" data-name="Path 10" d="M963.21288,296.13233s15.131,30.262,20.5,33.191-36.607,20.989-36.607,20.989-6.833-29.774-15.131-36.119S963.21288,296.13233,963.21288,296.13233Z" transform="translate(-177.13785 -97.98434)" fill="#feb8b8" /><path id="fc15680c-e415-4000-ac02-b1f296562473" data-name="Path 11" d="M919.77283,543.59733l-1.952,18.548s-20.988-7.321-14.155-20.988Z" transform="translate(-177.13785 -97.98434)" fill="#feb8b8" /><path id="ae3770ab-4aa4-41b9-9f4d-4c69df699916" data-name="Path 12" d="M911.47784,515.77634c14.643,15.615,92.247,2.436,92.247,2.436l-.972-11.225,9.762-10.243-2.927-47.837s8.78-22.45,10.243-56.617a30.78024,30.78024,0,0,0-.378-6.278c-5.032-30.607-54.87-50.32-56.239-49.857-.689.227-8.025,4.05-15.681,8.072-8.789,4.617-17.994,9.5-17.994,9.5-11.716,4.4-9.762,74.687-13.67,81.031s0,28.3,0,28.3l-4.39,20.987S896.83087,500.16132,911.47784,515.77634Z" transform="translate(-177.13785 -97.98434)" fill="#f0f0f0" /><path id="b41fb511-fd5e-48e5-b733-0d9230f6b6d5" data-name="Path 13" d="M958.78288,360.82433s13.667,41,10.738,68.822-34.655,107.382-34.655,107.382l-10.733,5.857v13.666l-7.553-20.458,20.77-43.428S911.43285,342.76534,958.78288,360.82433Z" transform="translate(-177.13785 -97.98434)" opacity="0.1" style={{isolation: 'isolate'}} /><path id="efbdbf49-3b58-4bc5-8391-5fbab31acdf7" data-name="Path 14" d="M945.96487,348.52235c14.161-7.808,35.639,12.7,58.09,34.657,8.063,7.883,12.726,7.09,15.4,2.832-5.032-30.607-54.87-50.32-56.239-49.857-.689.227-8.025,4.05-15.681,8.072Z" transform="translate(-177.13785 -97.98434)" opacity="0.1" style={{isolation: 'isolate'}} /><path id="a2828270-d54b-4ede-bb2b-8639f55947f0" data-name="Path 15" d="M945.97183,344.74934l5.857-16.107s40.024-19.036,66.381,0l4.393,27.333s3.9,45.393-18.548,23.429S960.12485,336.93934,945.97183,344.74934Z" transform="translate(-177.13785 -97.98434)" fill="#f0f0f0" /><path id="f68da632-d878-40c3-a103-67cfc5c970db" data-name="Path 16" d="M957.35687,354.21633s13.667,41,10.738,68.822-34.655,107.382-34.655,107.382l-10.738,5.861v13.667l-22.452-6.345,4.881-16.107s-7.81-9.762-2.44-12.691,4.393-19.036,4.393-19.036S910.01086,336.15633,957.35687,354.21633Z" transform="translate(-177.13785 -97.98434)" fill="#f0f0f0" /><path id="f57115f6-7f5b-4177-880b-f5eff1305e5b" data-name="Path 17" d="M966.48688,306.03134c-.462-2.188-.4-4.542-1.448-6.517-1.573-2.961-5.188-4.2-8.529-4.492-4.265-.371-8.562.367-12.833.075s-8.833-1.92-10.959-5.635c-.848-1.482-1.266-3.227-2.391-4.512-2.341-2.674-6.608-2.26-9.972-1.114s-6.873,2.82-10.312,1.924c-2.892-8.091.669-17.424,6.828-23.415s14.465-9.215,22.715-11.618c10.881-3.17,23.126-5.043,33.13.282,14.507,7.721,19.626,28.158,18.288,43.39-.506,5.758-1.333,12.278-5.988,16.165C978.19385,316.26233,968.54687,315.77333,966.48688,306.03134Z" transform="translate(-177.13785 -97.98434)" fill="#2f2e41" /><rect id="e1abf0e4-070b-4c82-8a12-ebedd4e3db02" data-name="Rectangle 1" x="0.26201" y="0.347" width="611.461" height="391.60699" fill="#e6e6e6" /><rect id="ace8bea0-82e8-49b8-a50c-1e1cb532084f" data-name="Rectangle 2" x="19.746" y="49.464" width="576.492" height="319.32199" fill="#fff" /><rect id="b540f353-e277-4512-bc56-a133cea2858b" data-name="Rectangle 3" width="611.461" height="25.977" fill="#00356b" /><circle id="b2b285b5-c1c3-4b12-9710-2898c7239781" data-name="Ellipse 3" cx="19.30501" cy="13.281" r="4.815" fill="#fff" /><circle id="a5a428bb-42a2-4f57-9e6c-9979c01a2490" data-name="Ellipse 4" cx="37.58001" cy="13.281" r="4.815" fill="#fff" /><circle id="a9929a25-14ce-4464-bac9-4165f1e3fae6" data-name="Ellipse 5" cx="55.85501" cy="13.281" r="4.815" fill="#fff" /><path id="b4a2d72b-abc3-4d2f-a2b8-a2aff6897b26" data-name="Path 37" d="M297.74287,192.20533l-38.133,37.657,38.133,37.656,8.58-8.58-28.835-28.839,29.076-29.076Z" transform="translate(-177.13785 -97.98434)" fill="#00356b" /><path id="b5120d89-6cbe-4bfa-9a1b-cf9b07deff91" data-name="Path 38" d="M328.98787,192.20533l38.132,37.657-38.132,37.656-8.58-8.58,28.837-28.838-29.078-29.077Z" transform="translate(-177.13785 -97.98434)" fill="#00356b" /><path id="a31271bd-8e2f-469b-8cee-8b6db3f92f99" data-name="Path 65" d="M452.33185,201.65533c-3.119,0-5.647,1.794-5.647,4.006s2.528,4.006,5.647,4.006h266.214c3.119,0,5.647-1.794,5.647-4.006s-2.528-4.006-5.647-4.006Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" /><path id="bf577952-0fd5-43e0-be6b-ea1966b51a93" data-name="Path 78" d="M715.89888,421.13433h-447.838c-4.578,0-8.288-2.643-8.293-5.9v-79.042c.005-3.257,3.715-5.9,8.293-5.9h447.838c4.578,0,8.288,2.643,8.293,5.9v79.041C724.18788,418.49035,720.47688,421.13034,715.89888,421.13433Zm-447.838-88.484c-2.747,0-4.973,1.586-4.976,3.54v79.041c0,1.954,2.229,3.538,4.976,3.54h447.838c2.747,0,4.973-1.586,4.976-3.54v-79.039c0-1.954-2.229-3.538-4.976-3.54Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" /><circle id="f7f4957b-eaa8-456b-bf02-bacf7de3ef80" data-name="Ellipse 13" cx="137.04001" cy="277.695" r="20.036" fill="#e6e6e6" /><path id="fb0f055d-da6e-47f2-bb6d-7ff26d7b746a" data-name="Path 79" d="M370.68788,359.65533a4.006,4.006,0,0,0-.01037,8.012H559.54884a4.006,4.006,0,0,0,0-8.012Z" transform="translate(-177.13785 -97.98434)" fill="#00356b" /><path id="bfcde504-8c45-4d21-843b-87b1f7e22ce0" data-name="Path 80" d="M370.68788,383.69235a4.006,4.006,0,0,0-.01037,8.012h81.27636a4.006,4.006,0,0,0,.01038-8.012H370.68788Z" transform="translate(-177.13785 -97.98434)" fill="#00356b" /><path id="a66699ea-75f1-4575-b6d5-52b0b1f8e30c" data-name="Path 81" d="M450.38788,225.65533a4.019,4.019,0,0,0,0,8.012h174.47a4.019,4.019,0,0,0,0-8.012Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" /><path id="bbc4ca7b-25d4-4c7e-b3d4-0411f69bd48f" data-name="Path 82" d="M451.53583,249.65533c-2.679,0-4.851,1.794-4.851,4.006s2.172,4.006,4.851,4.006h228.7c2.679,0,4.851-1.794,4.851-4.006s-2.172-4.006-4.851-4.006Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" /></g></svg>
              </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row"> 
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <svg className="w-full sm:h-64 mx-auto" id="bfc717e4-0ce1-40c2-86b9-35a542da0074" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="998.28223" height="697.55116" viewBox="0 0 998.28223 697.55116"><title>file_manager</title><rect x="149.66797" y={24} width={103} height={120} fill="#f2f2f2" /><rect x="427.66797" y={94} width={103} height={120} fill="#f2f2f2" /><rect x="706.66797" y={24} width={103} height={120} fill="#f2f2f2" /><rect x="228.62109" y="430.33668" width="270.98999" height="67.57001" fill="#3f3d56" /><polygon points="784.198 696.3 545.438 696.3 612.488 580.17 664.818 489.53 784.198 696.3" fill="#3f3d56" /><rect x="136.93799" y="515.84998" width="396.83997" height="180.5" fill="#3f3d56" /><circle cx="664.40025" cy="442.31496" r="47.05512" fill="#00365b" /><rect x="1.56445" y="695.55116" width="860.78955" height={2} fill="#3f3d56" /><polygon points="499.608 434.87 499.608 497.91 435.798 497.91 474.798 430.34 496.998 430.34 499.608 434.87" opacity="0.1" /><polygon points="533.778 515.85 533.778 696.35 321.228 696.35 321.428 696 425.438 515.85 533.778 515.85" opacity="0.1" /><polygon points="679.538 696.3 545.438 696.3 612.488 580.17 615.488 585.36 679.538 696.3" opacity="0.1" /><polygon points="664.628 696.45 335.168 696.45 335.428 696 443.478 508.85 499.898 411.12 600.488 585.36 664.538 696.3 664.628 696.45" fill="#00365b" /><circle cx="499.40025" cy="393.31496" r="20.26772" fill="#3f3d56" /><path d="M544.29639,500.99005A368.02149,368.02149,0,0,1,423.57422,480.7254C371.522,462.72833,328.87939,437.9046,296.832,406.94366c-60.62109-58.56592-110.32129-67.39209-141.33349-64.48584-33.57032,3.14746-53.11084,20.33789-53.3042,20.51123l-1.33545-1.48877c.19726-.17725,20.14062-17.75781,54.32324-21.00146,20.04541-1.90088,41.00781,1.41113,62.30664,9.84716,26.56055,10.52,53.72314,29.085,80.73291,55.1792,31.83643,30.75733,74.231,55.4292,126.00586,73.32959,95.04736,32.86133,202.16943,24.90528,293.89892-21.8291,30.3711-15.47461,60.38868-26.03711,89.21778-31.394,36.35351-6.75684,70.83008-5.18848,102.47949,4.6582,69.54883,21.63721,117.05371,20.48975,144.6582,15.71924,29.78418-5.148,43.29786-15.45068,43.43067-15.5542l1.22851,1.57861c-.55957.43506-14.0459,10.71387-44.31933,15.94629-27.82227,4.80957-75.667,5.97461-145.5918-15.78076-70.80078-22.02441-142.50879,2.312-190.19531,26.60792A383.87946,383.87946,0,0,1,573.398,499.87188Q558.79492,500.98956,544.29639,500.99005Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M318.50781,424.57257l-1.43115-1.397a73.10676,73.10676,0,0,0,14.66211-25.65088c4.86572-14.64306,7.24268-37.769-9.06787-64.7832-16.688-27.63965-17.439-50.08935-15.13086-64.05517,2.51221-15.19629,8.9209-23.71436,9.19238-24.06934l1.58936,1.21436c-.064.08349-6.417,8.55615-8.82764,23.29931-2.22559,13.61133-1.44922,35.51709,14.88867,62.57666,16.72754,27.70508,14.24951,51.47315,9.22559,66.5332C328.16455,414.55792,318.8999,424.1712,318.50781,424.57257Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M393.52686,246.22442h-144v-144h144Zm-142-2h140v-140h-140Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M597.5083,495.57208l-1.43164-1.39649a73.122,73.122,0,0,0,14.66211-25.65039c4.86621-14.64355,7.24219-37.76953-9.06836-64.78369-16.6875-27.63965-17.43848-50.08935-15.12988-64.05517,2.51172-15.19629,8.91992-23.71436,9.19238-24.06934l1.58887,1.21436c-.06348.08349-6.417,8.55615-8.82813,23.29931-2.22558,13.61133-1.44922,35.51709,14.88965,62.57666,16.72754,27.70508,14.249,51.47315,9.22461,66.53369C607.16455,485.55841,597.8999,495.17071,597.5083,495.57208Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M672.52686,317.22442h-144v-144h144Zm-142-2h140v-140h-140Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M875.5083,423.57257l-1.43164-1.397a73.11541,73.11541,0,0,0,14.66211-25.65088c4.86621-14.64306,7.24219-37.769-9.06836-64.7832-16.6875-27.63965-17.43848-50.08935-15.12988-64.05517,2.51172-15.19629,8.91992-23.71436,9.19238-24.06934l1.58887,1.21436c-.06348.08349-6.417,8.55615-8.82813,23.29931-2.22558,13.61133-1.44922,35.51709,14.88965,62.57666,16.72754,27.70508,14.249,51.47315,9.22461,66.5332C885.16455,413.55792,875.8999,423.1712,875.5083,423.57257Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M950.52686,245.22442h-144v-144h144Zm-142-2h140v-140h-140Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><rect x="178.66797" y={43} width={88} height={2} fill="#3f3d56" /><rect x="178.66797" y={65} width={88} height={2} fill="#3f3d56" /><rect x="178.66797" y={87} width={88} height={2} fill="#3f3d56" /><rect x="455.66797" y={111} width={88} height={2} fill="#3f3d56" /><rect x="455.66797" y={133} width={88} height={2} fill="#3f3d56" /><rect x="455.66797" y={155} width={88} height={2} fill="#3f3d56" /><rect x="733.66797" y={43} width={88} height={2} fill="#3f3d56" /><rect x="733.66797" y={65} width={88} height={2} fill="#3f3d56" /><rect x="733.66797" y={87} width={88} height={2} fill="#3f3d56" /><path d="M922.279,765.37659c5.391,19.92827,23.85626,32.27034,23.85626,32.27034s9.7248-19.968,4.33383-39.89629-23.85626-32.27033-23.85626-32.27033S916.88805,745.44833,922.279,765.37659Z" transform="translate(-100.85889 -101.22442)" fill="#00365b" /><path d="M930.20067,761.0938c14.7929,14.40029,16.59974,36.53688,16.59974,36.53688s-22.17718-1.21088-36.97008-15.61117-16.59974-36.53689-16.59974-36.53689S915.40777,746.6935,930.20067,761.0938Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><rect x="191.66797" y={558} width={103} height={120} fill="#f2f2f2" /><path d="M435.52686,779.22442h-144v-144h144Zm-142-2h140v-140h-140Z" transform="translate(-100.85889 -101.22442)" fill="#fff" /><rect x="218.66797" y={577} width={88} height={2} fill="#00365b" /><rect x="218.66797" y={599} width={88} height={2} fill="#00365b" /><rect x="218.66797" y={621} width={88} height={2} fill="#00365b" /><path d="M327.39722,318.41089h-.00006c-24.032,0-43.51376,21.62049-43.51376,48.29071v33.8848h10.42141l6.0334-12.55459-1.50836,12.55459h66.98482l5.48492-11.41327-1.37121,11.41327h7.54176V373.98076C377.47014,343.2904,355.05173,318.41089,327.39722,318.41089Z" transform="translate(-100.85889 -101.22442)" fill="#2f2e41" /><path d="M277.53809,539.79617,250.821,551.15093,157.97913,626.6267a27.32591,27.32591,0,0,0-6.01134,14.6944c-.66793,8.683-28.72087,54.1021-18.702,60.11344s46.087,24.04538,48.09075,12.02269,12.69062-63.45308,12.69062-63.45308l89.50224-80.15126Z" transform="translate(-100.85889 -101.22442)" fill="#2f2e41" /><path d="M172.67353,703.43832l-11.35476,33.39636s12.02269,12.69062,6.01134,23.37745v36.736h-9.351l-2.67171-19.36989s-10.65081,19.12517-16.03025,19.36989c-11.27717.513-33.60924,4.52434-34.27717-1.487s16.91107-11.87155,16.91107-11.87155l18.702-51.43039,8.01512-31.39258Z" transform="translate(-100.85889 -101.22442)" fill="#2f2e41" /><path d="M347.00252,531.11312s6.01134,58.77759-11.35476,69.46442S241.47,645.32866,241.47,645.32866s32.72843,30.72465,26.04916,38.07185-36.736,27.385-40.74356,23.37745-48.75868-52.09832-43.41526-67.46064,79.48333-65.45686,79.48333-65.45686l8.683-31.39258,2.67171-25.38123,28.05294-18.034Z" transform="translate(-100.85889 -101.22442)" fill="#2f2e41" /><circle cx="215.54264" cy="265.19486" r="27.84476" fill="#ffb9b9" /><path d="M337.9855,377.82384s-1.33585,25.38123,19.36989,33.39635S305.925,471.33364,305.925,471.33364V413.224s9.351-10.01891,0-25.38124Z" transform="translate(-100.85889 -101.22442)" fill="#ffb9b9" /><path d="M382.40266,497.04883,377.05924,523.098,361.029,612.60023s13.35854,38.07185-4.67549,37.40392-9.351-41.41148-9.351-41.41148l9.351-74.13992V505.73189Z" transform="translate(-100.85889 -101.22442)" fill="#ffb9b9" /><path d="M267.51919,484.35822l-6.01135,23.37745-27.385,66.12479s-18.702,31.39257-3.33964,30.72464,15.36233-30.72464,15.36233-30.72464l31.39257-53.43418V490.36956Z" transform="translate(-100.85889 -101.22442)" fill="#ffb9b9" /><path d="M262.8437,679.393l22.04159,20.70574s15.36233-3.33964,21.37367,14.6944,10.01891,29.38879,10.01891,29.38879l-8.01513,4.67549-10.0189-14.02647s-6.01135,25.38123-12.02269,27.385-36.06807,15.36233-33.39636,0l14.6944-21.37367s2.00378-24.04537-4.00757-26.04915S241.47,692.75149,241.47,692.75149Z" transform="translate(-100.85889 -101.22442)" fill="#2f2e41" /><path d="M348.06136,551.81886s-62.78515-22.70952-66.79272-20.70574a30.12046,30.12046,0,0,1-9.40793,2.44178l.057-9.121s20.70574-7.3472,32.06051-2.67171,46.087,25.38123,46.087,25.38123Z" transform="translate(-100.85889 -101.22442)" fill="#3f3d56" /><path d="M309.93256,457.97509s18.034-20.70574,23.37745-33.39635a32.79069,32.79069,0,0,1,17.3353-17.04617s40.10644,9.031,39.43851,25.06129-25.38123,40.74356-25.38123,40.74356,3.33963,88.83431-14.6944,87.49846a38.68242,38.68242,0,0,1-8.01513-16.03026c-2.00378-9.351-64.121-19.36988-64.121-19.36988s-5.34342,9.351-6.01135,5.34341,5.34342-102.19285,5.34342-102.19285l31.85141-21.05373Z" transform="translate(-100.85889 -101.22442)" fill="#d0cde1" /><path d="M384.93877,426.14142l.44725.251a9.215,9.215,0,0,1,4.7053,8.03735l-.00685,49.56884a9.28769,9.28769,0,0,0,3.3039,7.0688c2.57292,2.18849,4.95882,5.34208.03509,6.98332-8.01513,2.67171-39.40771,16.03026-40.07563,11.35477s-2.00379-10.01891,0-10.01891c1.5687,0,10.91537-47.89585,18.42554-68.37431A9.21645,9.21645,0,0,1,384.93877,426.14142Z" transform="translate(-100.85889 -101.22442)" fill="#d0cde1" /><path d="M286.22115,426.24855l-9.351,2.67171-10.68684,46.087s-12.69061,2.67171-8.68305,7.3472S278.206,499.05261,278.206,499.05261Z" transform="translate(-100.85889 -101.22442)" fill="#d0cde1" /><path d="M339.76739,331.71338a22.82089,22.82089,0,0,0-18.00636-9.18879h-.8543c-16.47157,0-29.82435,14.90488-29.82435,33.291v.00007h5.51919l.89134-6.78453,1.30687,6.78453h32.734l2.74249-5.73984-.68564,5.73984h6.43972q4.50748,22.38537-12.95306,44.77074h10.9699l5.48491-11.47968-1.37121,11.47968h20.9113l4.11371-26.40333C367.18589,354.40943,355.69682,337.64177,339.76739,331.71338Z" transform="translate(-100.85889 -101.22442)" fill="#2f2e41" /><rect x="311.14111" y="430.33668" width={104} height="33.90002" opacity="0.1" /><rect x="317.14111" y="401.2367" width={94} height={58} fill="#00365b" /></svg>
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Individual Developer Reports</h3>
                  <p className="text-gray-600 mb-8">We create a report for you to easily understand the code contribution of an individual in a playful format without any effort. The summary would be succint and have a timeline feature.<br /><br />
                    <a className="text-orange-500 underline" href="https://undraw.co/">Know More</a></p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Group files</h3>
                <p className="text-gray-600 mb-8">You can just look at select number files and the changes that have been made to those files over time. It will tell you specific code history over time. <br /><br />
                  <a className="text-orange-500 underline" href="https://undraw.co/">Know More</a></p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <svg className="w-5/6 sm:h-64 mx-auto" id="bf74385c-6483-43b7-aa3a-5b28e4e3e168" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="823.5" height="539.23257" viewBox="0 0 823.5 539.23257"><ellipse cx={118} cy="530.23257" rx={118} ry={9} fill="#e6e6e6" /><path d="M344.468,315.84454l-47.07583-12.83886q18.85578-17.793,16.40521-33.5237H344.468Z" transform="translate(-188.25 -180.38372)" fill="#9f616a" /><polygon points="161.211 496.376 146.005 498.515 127.687 330.184 98.443 497.802 82.751 498.515 82.751 285.961 179.756 285.961 161.211 496.376" fill="#2f2e41" /><path d="M278.89831,710.69308h0a10.69525,10.69525,0,0,0,10.60707-7.816l1.11072-16.57479-2.23906-11.75506c-5.90752-4.85489-11.87976-4.75376-17.91246,0L268.541,699.16917A10.69524,10.69524,0,0,0,278.89831,710.69308Z" transform="translate(-188.25 -180.38372)" fill="#2f2e41" /><path d="M341.66608,710.69308h0a10.69525,10.69525,0,0,0,10.60707-7.816l1.11072-16.57479-2.23905-11.75506c-5.90753-4.85489-11.87976-4.75376-17.91247,0l-1.92359,24.62195A10.69525,10.69525,0,0,0,341.66608,710.69308Z" transform="translate(-188.25 -180.38372)" fill="#2f2e41" /><circle cx="149.79858" cy="84.10538" r="27.10427" fill="#9f616a" /><path d="M372.28555,469.91089H268.86137c13.40488-62.12418,13.36732-112.15823,2.68969-152.62266a10.81293,10.81293,0,0,1,6.57562-12.85324l27.82474-10.70182c8.35359,10.788,20.1417,15.5,38.51659,8.55924l14.58078,2.99093a14.98248,14.98248,0,0,1,11.957,15.66542c-1.07315,15.82559-.65,31.77226-1.57328,45.538C366.57335,409.115,365.33855,442.34709,372.28555,469.91089Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M323.78318,228.82559s15.69194-17.83176,34.237-.71327l4.99289,1.42654-3.56635,2.85308s18.545,8.55924,17.11849,26.391c0,0-2.85308-.71327-4.27962,0s-2.13982,8.55924-2.13982,8.55924-2.13981-5.70616-2.85308-6.41943-10.699,7.846-27.10426-4.99289c0,0-4.99289,12.83886-10.699,11.41232s-13.55214-.71327-17.11849,8.55925C312.37085,275.90142,293.11256,234.53175,323.78318,228.82559Z" transform="translate(-188.25 -180.38372)" fill="#2f2e41" /><path d="M377.27844,454.219l-9.15617,12.272a12.02693,12.02693,0,0,0,2.59424,16.93944l0,0a12.02693,12.02693,0,0,0,18.92117-7.8472l2.61941-16.37132L397.25,388.5981l-3.56635-35.66351L370.859,361.49383l6.41944,30.67062Z" transform="translate(-188.25 -180.38372)" fill="#9f616a" /><path d="M368.00592,370.05307l27.81754-12.83886-1.42654-10.10582a41.48828,41.48828,0,0,0-26.4891-38.68205l-8.46114-3.28085Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M266.72156,451.36587l9.15617,12.272a12.02693,12.02693,0,0,1-2.59424,16.93944l0,0a12.02693,12.02693,0,0,1-18.92117-7.8472l-2.61941-16.37132L246.75,385.745l3.56635-35.66351,22.82465,8.55924-6.41944,30.67062Z" transform="translate(-188.25 -180.38372)" fill="#9f616a" /><path d="M275.99408,367.2l-27.81754-12.83886,1.42654-10.10582a41.48828,41.48828,0,0,1,26.4891-38.68205l8.46114-3.28085Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M1004.25,640.11628h-476a7.5082,7.5082,0,0,1-7.5-7.5v-207a7.5082,7.5082,0,0,1,7.5-7.5h476a7.5082,7.5082,0,0,1,7.5,7.5v207A7.5082,7.5082,0,0,1,1004.25,640.11628Zm-476-219a4.50492,4.50492,0,0,0-4.5,4.5v207a4.50491,4.50491,0,0,0,4.5,4.5h476a4.50491,4.50491,0,0,0,4.5-4.5v-207a4.50492,4.50492,0,0,0-4.5-4.5Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M547.75,443.61628a4.5,4.5,0,0,0,0,9h63a4.5,4.5,0,0,0,0-9Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M979.04035,474.91143V558.361H554.20958V514.42334c2.94182-1.88912,5.90143-3.76937,8.88768-5.58753,12.75379-7.80481,26.40529-15.10408,41.28325-17.80921a62.31953,62.31953,0,0,1,21.31262-.26606c7.46567,1.23282,14.61134,3.80489,21.68594,6.38578,6.9768,2.55431,13.9714,5.18841,21.2682,6.66959a62.2716,62.2716,0,0,0,21.5704.4257c13.66035-2.04876,26.49415-7.53875,39.27457-12.50543,12.86049-4.99332,26.112-9.7117,40.03011-10.33255,13.74031-.62085,27.31181,2.62528,40.35,6.65184,26.58306,8.20394,53.726,20.37239,81.87329,12.02652,28.58273-8.46112,54.87248-32.8867,86.54811-25.64059A1.19244,1.19244,0,0,1,979.04035,474.91143Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M979.04035,476.366a1.28259,1.28259,0,0,1-1.45455.63855,47.36842,47.36842,0,0,0-11.5121-1.18843c-31.15722.54988-55.11271,25.63172-85.57811,29.38339-27.46769,3.37913-53.32114-9.97776-79.148-16.95775-13.419-3.62749-27.25483-5.55207-41.06406-3.08649-13.70274,2.439-26.563,8.0443-39.4764,13.01992-12.43452,4.78929-25.35683,9.2416-38.82014,9.46333-14.80256.24831-28.13287-5.85365-41.86225-10.50106-7.13963-2.42125-14.46553-4.337-22.03086-4.52323a66.64492,66.64492,0,0,0-21.71164,3.36138c-14.58971,4.63858-27.7337,12.90455-40.53188,21.11737a1.13679,1.13679,0,0,1-.75385.204,1.37378,1.37378,0,0,1-.58534-2.50109l.58534-.37255c2.93567-1.88912,5.8891-3.76937,8.86911-5.58753,12.72717-7.80481,26.35017-15.10408,41.19707-17.80921a62.06159,62.06159,0,0,1,21.26813-.26606c7.45008,1.23282,14.58083,3.80489,21.64067,6.38578,6.96223,2.55431,13.94222,5.18841,21.22379,6.66959a62.014,62.014,0,0,0,21.52537.4257c13.63183-2.04876,26.43884-7.53875,39.19258-12.50543,12.83364-4.99332,26.05747-9.7117,39.94654-10.33255,13.71162-.62085,27.25479,2.62528,40.26577,6.65184,26.52756,8.20394,53.61383,20.37239,81.70236,12.02652,28.52306-8.46112,54.75793-32.8867,86.36743-25.64059a1.1897,1.1897,0,0,1,.745.47A1.36658,1.36658,0,0,1,979.04035,476.366Z" transform="translate(-188.25 -180.38372)" fill="#00356b" /><circle cx="424.49576" cy="311.45889" r="6.20838" fill="#00356b" /><circle cx="581.47916" cy="303.47668" r="6.20838" fill="#00356b" /><circle cx="773.05211" cy="295.49447" r="6.20838" fill="#00356b" /><path d="M609.25,593.61628a4.5,4.5,0,0,0,0,9h63a4.5,4.5,0,0,0,0-9Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><circle cx="380.5" cy="417.23257" r={17} fill="#00356b" /><path d="M761.25,593.61628a4.5,4.5,0,0,0,0,9h63a4.5,4.5,0,0,0,0-9Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><circle cx="532.5" cy="417.23257" r={17} fill="#00356b" /><path d="M913.25,593.61628a4.5,4.5,0,0,0,0,9h63a4.5,4.5,0,0,0,0-9Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><circle cx="684.5" cy="417.23257" r={17} fill="#00356b" /><path id="e1cfef3e-7788-4f0f-b252-d185c9336b04" data-name="Path 78" d="M971.669,362.2257H736.831c-4.578,0-8.288-2.643-8.293-5.9v-51.042c.005-3.257,3.715-5.9,8.293-5.9H971.669c4.578,0,8.288,2.643,8.293,5.9v51.041C979.958,359.58171,976.247,362.2217,971.669,362.2257Zm-234.838-60.484c-2.747,0-4.973,1.586-4.976,3.54v51.041c0,1.954,2.229,3.538,4.976,3.54H971.669c2.747,0,4.973-1.586,4.976-3.54v-51.039c0-1.954-2.229-3.538-4.976-3.54Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M789.92905,328.39087a5.00589,5.00589,0,0,0-5,5v35a5.00589,5.00589,0,0,0,5,5h179a5.00589,5.00589,0,0,0,5-5v-35a5.00588,5.00588,0,0,0-5-5Z" transform="translate(-188.25 -180.38372)" fill="#00356b" /><circle cx="626.67905" cy="171.00715" r={11} fill="#fff" /><path d="M865.06094,346.61628a4.5,4.5,0,0,0,0,9h63a4.5,4.5,0,0,0,0-9Z" transform="translate(-188.25 -180.38372)" fill="#fff" /><path id="b00e8b21-64f0-4b6c-8490-a93637cb24e1" data-name="Path 78" d="M795.669,243.2257H560.831c-4.578,0-8.288-2.643-8.293-5.9v-51.042c.005-3.257,3.715-5.9,8.293-5.9H795.669c4.578,0,8.288,2.643,8.293,5.9v51.041C803.958,240.58171,800.247,243.2217,795.669,243.2257Zm-234.838-60.484c-2.747,0-4.973,1.586-4.976,3.54v51.041c0,1.954,2.229,3.538,4.976,3.54H795.669c2.747,0,4.973-1.586,4.976-3.54v-51.039c0-1.954-2.229-3.538-4.976-3.54Z" transform="translate(-188.25 -180.38372)" fill="#e6e6e6" /><path d="M613.92905,209.39087a5.00589,5.00589,0,0,0-5,5v35a5.00589,5.00589,0,0,0,5,5h179a5.00589,5.00589,0,0,0,5-5v-35a5.00588,5.00588,0,0,0-5-5Z" transform="translate(-188.25 -180.38372)" fill="#00356b" /><circle cx="450.67905" cy="52.00715" r={11} fill="#fff" /><path d="M689.06094,227.61628a4.5,4.5,0,0,0,0,9h63a4.5,4.5,0,0,0,0-9Z" transform="translate(-188.25 -180.38372)" fill="#fff" /></svg>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">For whom?</h1>
            <div className="w-full mb-4"> 
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">Code Evaluation</p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">Managers and CTOs</div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    When it comes to individual evaluation of developers, things can be little tricky to figure out? Our git visualization tool would help you to evaluate devolopers in a fast and transparent method!
                  </p>
                </a>
              </div>
             
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">Team Onboarding</p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">Developer Joinee</div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    It's hard for new recruits to navigate through the complex project code, we help him understand the source code from its' origins. Thus, making it faster and easier for him to onboard the project. 
                  </p>
                </a>
              </div>
              
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">Quick Code Reviews</p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">Scrum Master</div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    It will facilitate a quick code review for scrum masters and be a good starting point for the meeting. It will help meetings to be more productive and focused.  
                  </p>
                </a>
              </div>
             
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Pricing</h1>
            <div className="w-full mb-4"> 
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
              <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="p-8 text-3xl font-bold text-center border-b-4">Free</div>
                  <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">Free <span className="text-base" /></div>
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
                  <div className="h-1 w-full gradient my-0 py-0 rounded-t" />
                  <ul className="w-full text-center text-base font-bold">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>         
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="w-full pt-6 text-4xl font-bold text-center">15$ <span className="text-base">/ per month</span></div>
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="p-8 text-3xl font-bold text-center border-b-4">Pro</div>
                  <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">99$ <span className="text-base">/ per month</span></div>
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Change the colour #f8fafc to match the previous section colour */}
        <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
                  <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
                  <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <section className="container mx-auto text-center py-6 mb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Sign Up</h1>
          <div className="w-full mb-4"> 
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <h3 className="my-4 text-3xl leading-tight">Start your free trial now!</h3> 

          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action!</button>
        </section>
        {/*Footer*/}
        <footer className="bg-white">
          <div className="container mx-auto  px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">FAQ</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Help</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Support</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Terms</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Facebook</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Linkedin</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Official Blog</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">About Us</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 ">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* jQuery if you need it
  
  */}
      </div>


      );


  }
}

   
   


