import React from 'react';
import { Container, Row, ProgressBar, Col} from 'react-bootstrap';

const Skills = () => {
    const html = 95;
    const css = 85;
    const bs = 95;
    const rj = 80;
    const rbs = 95;
    const mu = 60;
    const ej = 60;
    const mdb = 65;
    const mySQL = 85;
    const php = 75;
    const laravel = 65;
    const pm = 90;
    return (
        <Container className="skills" id="skills">
            <div className="head-section box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <h1 className="text-center">My Skills</h1>
            </div>
            <Row>
                <Col>
                <h3>HTML</h3>
                    <ProgressBar striped animated variant="success" now={html} label={`${html}%`} />
                    <h3>CSS</h3>
                    <ProgressBar striped animated variant="info" now={css} label={`${css}%`} />
                    <h3>BootStrap</h3>
                    <ProgressBar striped animated variant="warning" now={bs} label={`${bs}%`} />
                    <h3>ReactJs</h3>
                    <ProgressBar striped animated variant="danger" now={rj} label={`${rj}%`} />
                    <h3>React BootStrap</h3>
                    <ProgressBar striped animated variant="success" now={rbs} label={`${rbs}%`} />
                    <h3>Material UI</h3>
                    <ProgressBar striped animated variant="info" now={mu} label={`${mu}%`} />
                </Col>
                    <Col>
                    <h3>ExpressJs</h3>
                    <ProgressBar striped animated variant="warning" now={ej} label={`${ej}%`} />
                    <h3>MongoDB</h3>
                    <ProgressBar striped animated variant="danger" now={mdb} label={`${mdb}%`} />
                    <h3>MySQL</h3>
                    <ProgressBar striped animated variant="primary" now={mySQL} label={`${mySQL}%`} />
                    <h3>PHP</h3>
                    <ProgressBar striped animated variant="success" now={php} label={`${php}%`} />
                    <h3>Laravel</h3>
                    <ProgressBar striped animated variant="info" now={laravel} label={`${laravel}%`} />
                    <h3>Project Management</h3>
                    <ProgressBar striped animated variant="warning" now={pm} label={`${pm}%`} />
                    </Col>
            </Row>
        </Container>
    );
};

export default Skills;