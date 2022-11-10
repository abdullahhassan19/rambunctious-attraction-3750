import styled from 'styled-components'

const LabTests = () => {
    return (
        <TimeStyled>
            <div id='main'>

                <div>
                    <div id='lab'>
                        <span>Lab Test From The Comfort Of Your Home</span>
                        <p>50,00,000+ lab tests booked | 20,00,000+ satisfied customers</p>
                    </div>
                    <div className='home'>
                        <div>
                            <img src="https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto" alt="img" />
                            <p>100% Safe & Hygienic</p>

                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto" alt="img" />
                            <p>Home Sample Pick Up</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto" alt="img" />
                            <p>View Reports Online</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto" alt="img" />
                            <p>Free Doctor Consultation</p>
                        </div>
                        <div>
                            <img src="https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto" alt="img" />
                            <p>Best Prices Guaranteed</p>
                        </div>
                    </div>
                    <button id="package">VIEW POPULAR PACKAGES</button>
                </div>
            </div>
        </TimeStyled>
    )
}
export { LabTests }

const TimeStyled = styled.div`
margin-left: 20px;
margin-right: 20px;
height:100%;
width: 100%;
box-sizing: border-box;
#main{
    display:flex;
    margin-top: 0px;
    background-color: rgb(247, 249, 252);
    padding-top: 20px;
    padding-left: 52px;
    margin: auto;
    gap: 34px;
}
#main>div:nth-child(1){
    width: 45%;
}
#lab{
    text-align: left;
    padding-top: 0;
}
#lab>span{
    font-weight: bold;
    font-size: 24px;
}
.home{
    width: 100%;
    display:flex;
}
.home>div{
    padding:0 22px;
    font-size: 13px;
    border-right: 2px solid rgb(230,231,232)
}
.home>div>img{
    height:38px;
    width:38px;
}
#main>div>img{
    width: 100%;
}
#package{
    padding: 10px 36px;
    margin:20px 0;
    background-color: rgb(255,111,97);
    border: none;
    color: white;
    font-weight: bold;
    text-align: left;
    border-radius: 5px;
    margin-left: 0;
}
`