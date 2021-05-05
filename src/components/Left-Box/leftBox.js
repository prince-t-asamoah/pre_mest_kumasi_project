import Footer from '../Footer/footer';

function RightBox({brand, msghead, msgbody}) {
    return (
        <div className="left-box">
            <div>
                <header>{brand}</header>
            </div>

            <div>
                <h1>{msghead}</h1>
                <p>{msgbody}</p>
            </div>
            
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default RightBox;