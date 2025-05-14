import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 20px;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 64px;
  font-weight: 450;
`;

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 450;
  margin-bottom: 40px;
  text-align: center;
`;

const ContributorsText = styled.div`
  font-size: 16px;
  color: #000;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const LeadershipItem = styled.div`
  font-size: 16px;
  color: #000;
  text-align: center;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 60px;
  padding: 20px;
  font-size: 14px;
  color: #666;
`;

const ContributorsSection: React.FC = () => {
  const foundationalResearch = [
    'Bill Peebles', 'Tim Brooks', 'Jure Zbontar', 'Bram Wallace', 
    'Connor Holmes', 'Will DePue', 'Dmytro Okhonko', 'Ricky Wang', 
    'Troy Luhman', 'Eric Luhman', 'Eric Mintun', 'Harold Li', 
    'Avi Verma', 'Clarence Ng', 'Aditya Ramesh'
  ];

  const foundationalProduct = [
    'Boyang Niu', 'David Schnurr', 'Gilman Tolle', 'Joe Taylor',
    'Joey Flynn', 'Larry Kai', 'Mike Starr', 'Rajeev Nayak',
    'Rohan Sahai', 'Shirong Wu', 'Wesam Manassra', 'Yufei Guo'
  ];

  const contributors = [
    'Aleah Houze', 'Bailey Richardson', 'Carolina Paz', 'David Duxin',
    'Farzad Khorasani', 'Gabriel Petersson', 'Jess Manzano', 'Michael Chang',
    'Nikki Sommer', 'Pritam Damania', 'Sagun Gaind', 'Sam Altman',
    'Souki Mansoor', 'Tifa Chen', 'Tyce Walters'
  ];

  const leadership = [
    'Bill Peebles', 'Research', 'Rohan Sahai', 'Product',
    'Connor Holmes', 'Systems', 'Natalie Summers', 'Chief of Staff',
    'Aditya Ramesh', 'Organization Leader'
  ];

  const appliedSupport = [
    'Andrew Top', 'Ankit Gohel', 'Antonia Woodford', 'Ashley Zhuang',
    'Ben Calabrese', 'Blake Samic', 'Bryan Ashley', 'Byron Hill', 'Caleb Wang',
    'Chen Ding', 'Cindy Yong', 'David Martin', 'David Sasaki', 'Davin Bogan',
    'Ikai Lan', 'Jake Brill', 'Jason Fedor', 'Joanne Jang', 'Jos Kraaijeveld',
    'Kai Hayashi', 'Karthik Rangarajan', 'Kelly Stirman', 'Lu Zhang',
    'Mengchao Zhong', 'Mike McClay', 'Nate Gonzalez', 'Nick Cooper',
    'Nick Turley', 'Pavel Belov', 'Rohit Ramchandani', 'Ryan Ragona', 'Sergei Vorobev'
  ];

  const researchInfra = [
    'Andrew Cann', 'Duncan Findlay', 'Jamie Kiros', 'Raul Puri'
  ];

  const commsSupport = [
    'Alex Baker-Whitcomb', 'Anna McKean', 'Ashley Tyra', 'Bailey Richardson',
    'Cory Decareaux', 'Eric Antonow', 'Julie Steele', 'Kayla Wood',
    'Leah Anise', 'Liz Bourgeois', 'Niko Felix', 'Rachel Puckett',
    'Sarah Wray', 'Taya Christianson'
  ];

  const commsDesign = [
    'Adam Brandon', 'Adam Koppel', 'Ben King', 'Bobby Spero', 'Cary Hudson',
    'Dana Palmie', 'Dev Valladares', 'Dwayne Koh', 'Emilee Goo', 'Freddie Sulit',
    'Justin Wang', 'Kendra Rimbach', 'Leyan Lo', 'Malisa Kuch', 'Matt Nichols',
    'Maya Shetty', 'Rishabh Aggarwal', 'Roy Chen', 'Ruby Chen', 'Sarah Culver',
    'Shannon Jager', 'Thomas Degry', 'Tomo Hiratsuka', 'Vanessa Antonia Schefke',
    'Veit Moeller', 'Wes McCabe'
  ];

  const productPolicy = ['Aleah Houze', 'Ryan Beiermeister'];

  const globalAffairs = [
    'Alice Lee', 'Angela Jiang', 'Claudia Fischer', 'Debbie Mesloh',
    'Johanna Shelton', 'Morgan Dwyer'
  ];

  const strategicFinance = [
    'Angela Zhu', 'Chengpeng Mou', 'Denny Jin', 'Stacie Faggioli',
    'Stephanie Struck'
  ];

  const safetyAlignment = [
    'Andrea Vallone', 'Boaz Barak', 'David Robinson', 'Irina Kofman',
    'Joaquin Quinonero Candela', 'Johannes Heidecke', 'Lilian Weng',
    'Mia Glaese', 'Rodrigo Riaza Perez', 'Sam Toizer', 'Sandhini Agarwal',
    'Tejal Patwardhan', 'Troy Peterson'
  ];

  const legal = [
    'Ben Rossen', 'Charles Proctor', 'Che Chang', 'Fred von Lohmann',
    'Galia Amram', 'Gideon Myles', 'Harris Cohen', 'Matt Castle',
    'Shiao Lee', 'Tom Rubin', 'Tom Stasi', 'Tyce Walters'
  ];

  const strategicPartnerships = [
    'Houda Nait El Barj', 'Jasmyn Samaroo', 'Joshua Drapekin', 'Michelle Fradin'
  ];

  const goToMarket = [
    'Alison Harmon', 'Chad Nelson', 'David Duxin', 'Dom Grillo',
    'Emily Vernon', 'Glen Worthington', 'James Dyett', 'Jessica Shieh',
    'Krithika Muthukumar', 'Leher Pathak', 'Mendi Sui', 'Pedro Aguilar',
    'Rebecca Alter', 'Robel Yemiru', "Shauna O'Brien", 'Stella Ng',
    'Stephen Petersilge', 'Varun Shetty', 'Victoria Chernova'
  ];

  const intelInvestigations = [
    'Adam Wells', 'Chelsea Carlson', 'Derek Chen', 'Mengchao Zhong',
    'Ryan Fugit', 'Will McCants', 'Zoe Stoll'
  ];

  const specialThanks = [
    'Adele Li', 'Alec Radford', 'Alex Kirillov', 'Bob McGrew', 'Brad Lightcap',
    'Chad Nelson', 'Cheng Lu', 'Chris Hallacy', 'Christopher Lehane',
    'Christine McLeavey', 'Dane Stuckey', 'Gabriel Goh', 'Giancarlo Lionetti',
    'Greg Brockman', 'Hannah Wong', 'Iah Sohl', 'Ilya Sutskever', 'Jakub Pachocki',
    'James Betker', 'Jason Kwon', 'Jonathan Lachman', 'Josh Achiam',
    'Julia Villagra', 'Kevin Weil', 'Lauren Itow', 'Li Jing', 'Mark Chen',
    'Matt Knight', 'Mayank Gupta', 'Mira Murati', 'Noah Jorgensen',
    'Patrick Geonetta', 'Peter Welinder', 'Prafulla Dhariwal', 'Rowan Zellers',
    "Ryan O'Rourke", 'Sarah Friar', 'Specer Papay', 'Srinivas Narayanan',
    'Szymon Sidor', 'Ugurcan Turkdogan', 'Vinnie Monaco', 'Wojciech Zaremba',
    'Yang Song'
  ];

  const renderText = (items: string[]) => (
    <ContributorsText>{items.join(', ')}</ContributorsText>
  );

  return (
    <Container>
      <Title>Foundational Contributors</Title>

      <Section>
        <SectionTitle>Research</SectionTitle>
        {renderText(foundationalResearch)}
      </Section>

      <Section>
        <SectionTitle>Product</SectionTitle>
        {renderText(foundationalProduct)}
      </Section>

      <Section>
        <SectionTitle>Contributors</SectionTitle>
        {renderText(contributors)}
      </Section>

      <Section>
        <SectionTitle>Leadership</SectionTitle>
        <LeadershipGrid>
          {leadership.map((item, index) => (
            <LeadershipItem key={index}>{item}</LeadershipItem>
          ))}
        </LeadershipGrid>
      </Section>

      <Section>
        <SectionTitle>Applied Support</SectionTitle>
        {renderText(appliedSupport)}
      </Section>

      <Section>
        <SectionTitle>Research Infrastructure Support</SectionTitle>
        {renderText(researchInfra)}
      </Section>

      <Section>
        <SectionTitle>Communications Support</SectionTitle>
        {renderText(commsSupport)}
      </Section>

      <Section>
        <SectionTitle>Communications Design & Creative</SectionTitle>
        {renderText(commsDesign)}
      </Section>

      <Section>
        <SectionTitle>Product Policy</SectionTitle>
        {renderText(productPolicy)}
      </Section>

      <Section>
        <SectionTitle>Global Affairs</SectionTitle>
        {renderText(globalAffairs)}
      </Section>

      <Section>
        <SectionTitle>Strategic Finance</SectionTitle>
        {renderText(strategicFinance)}
      </Section>

      <Section>
        <SectionTitle>Safety & Alignment</SectionTitle>
        {renderText(safetyAlignment)}
      </Section>

      <Section>
        <SectionTitle>Legal</SectionTitle>
        {renderText(legal)}
      </Section>

      <Section>
        <SectionTitle>Strategic Partnerships</SectionTitle>
        {renderText(strategicPartnerships)}
      </Section>

      <Section>
        <SectionTitle>Go to Market</SectionTitle>
        {renderText(goToMarket)}
      </Section>

      <Section>
        <SectionTitle>Intelligence & Investigations</SectionTitle>
        {renderText(intelInvestigations)}
      </Section>

      <Section>
        <SectionTitle>Special Thanks</SectionTitle>
        {renderText(specialThanks)}
      </Section>

      <Footer>
        Built by OpenAI in San Francisco, California Published December 9, MMXXIV
      </Footer>
    </Container>
  );
};

export default ContributorsSection; 