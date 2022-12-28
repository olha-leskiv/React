import  'bulma/css/bulma.css'
import ProfileCard from "./Profile.card";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-success">
                <div className="hero-body has-text-centered">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
                <div></div>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard name='Cortana' src={CortanaImg} alt='Cortana image' text='Голосовий помічник названо на честь штучного інтелекту Кортани, що супроводжує героя серії відеоігор Halo, Майстра Чіфа. В Halo Кортана надає тактичні поради, миттєвий доступ до інформації та розрахунки. Корпорація Microsoft залучила актрису озвучування Кортани, Джен Тейлор, для створення голосу американської версії помічника[1].' handle='@cortana' />
                        </div>
                        <div className="column is-4">
                            <ProfileCard name='Siri' src={SiriImg} alt='Siri image' text='Siri [ˈsɪri] — персональний помічник і питально-відповідальна система, адаптована під iOS. Цей додаток спілкується природною мовою, щоб відповідати на питання і давати рекомендації. Siri пристосовується до кожного користувача індивідуально, вивчаючи його особливості протягом тривалого часу.' handle='@siri'/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard name='Alexa' src={AlexaImg} alt='Alexa image' text='Amazon Alexa — голосовий асистент, який інтегровано в аудіоупристрої компанії Amazon (Echo, Echo Dot, Tap), приставки Fire TV та інші. Може програвати музику та читати новини з декількох джерел. Дає інформацію про погоду, затори на дорогах та інші параметри. Може працювати з будь-яким стороннім додатком або послугою завдяки відкритому API' handle='@alexa'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;