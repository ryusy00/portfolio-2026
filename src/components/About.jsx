import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="about_inner">

                <div className="about_header">
                    <p className="about_label">01 / ABOUT ME</p>
                    <h2 className="about_title">
                        Beyond<br />
                        <span>Publishing.</span>
                    </h2>
                </div>

                <div className="about_content">
                    <p className="about_intro">
                        웹 퍼블리싱 실무 경험을 바탕으로
                        <strong> 사용자 경험과 구현 품질을 고민하는
                        프론트엔드 개발자</strong>를 지향합니다.
                    </p>

                    <p className="about_description">
                        디자인의 의도를 이해하고,
                        사용성과 완성도를 고려해 웹을 구현합니다.

                        끊임없이 배우고 성장하는 프론트엔드 개발자입니다.
                    </p>

                    <div className="about_info">
                        <div className="about_info_item">
                            <span>EXPERIENCE</span>
                            <p>Web Publishing · Frontend</p>
                        </div>

                        <div className="about_info_item">
                            <span>FOCUS</span>
                            <p>UI / UX · Responsive Web · React</p>
                        </div>

                        <div className="about_info_item">
                            <span>INTEREST</span>
                            <p>Interaction · Design System · Web Accessibility</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="about_skills">
                <p className="about_label">TECH STACK</p>

                <div className="about_skill_group">
                    <span className="about_skill_category">FRONTEND</span>
                    <div className="about_skill_list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Bootstrap</span>
                        <span>SCSS</span>
                    </div>
                </div>

                <div className="about_skill_group">
                    <span className="about_skill_category">TOOLS & LIBRARIES</span>
                    <div className="about_skill_list">
                        <span>Git</span>
                        <span>VS Code</span>
                        <span>ag-Grid</span>
                        <span>ECharts</span>
                    </div>
                </div>

                <div className="about_skill_group">
                    <span className="about_skill_category">BACKEND EXPERIENCE</span>
                    <div className="about_skill_list">
                        <span>JSP</span>
                        <span>Spring</span>
                        <span>MyBatis</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About