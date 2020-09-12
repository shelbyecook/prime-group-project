import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchOption from '../SearchOption/SearchOption';

import styles from './SkillsWidget.module.css';
import classnames from 'classnames';
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Badge,
  Button,
} from 'reactstrap';

const skills = [
  'Active listening',
  'Adaptability',
  'Advising',
  'Analytical thinking',
  'Business knowledge',
  'Caring',
  'Coaching',
  'Collaboration',
  'Communication',
  'Conceptual thinking',
  'Cooperation',
  'Creativity',
  'Critical thinking',
  'Curiosity',
  'Decision making',
  'Delegation',
  'Diplomacy',
  'Emotional intelligence',
  'Executive presence',
  'Flexibility',
  'Initiative',
  'Innovation',
  'Integrity',
  'Motivation',
  'Negotiating',
  'Networking',
  'Patience',
  'Perseverance',
  'Planning',
  'Presenting',
  'Problem solving',
  'Productivity',
  'Respect',
  'Responsibility',
  'Sense of humor',
  'Sharing',
  'Strategic thinking',
  'Troubleshooting',
];

const skills2 = [
  'Algorithms',
  'Analytical Skills',
  'Big Data',
  'Calculating',
  'Compiling Statistics',
  'Data Analytics',
  'Data Mining',
  'Database Design',
  'Database Management',
  'Documentation',
  'Modeling',
  'Modification',
  'Needs Analysis',
  'Quantitative Research',
  'Quantitative Reports',
  'Statistical Analysis',
  'Applications',
  'Certifications',
  'Coding',
  'Computing',
  'Configuration',
  'Customer Support',
  'Debugging',
  'Design',
  'Development',
  'Hardware',
  'Implementation',
  'Information Technology',
  'Infrastructure',
  'Languages',
  'Maintenance',
  'Network Architecture',
  'Network Security',
  'Networking',
  'New Technologies',
  'Operating Systems',
  'Programming',
  'Restoration',
  'Security',
  'Servers',
  'Software',
  'Solution Delivery',
  'Storage',
  'Structures',
  'Systems Analysis',
  'Technical Support',
  'Technology',
  'Testing',
  'Tools',
  'Training',
  'Troubleshooting',
  'Usability',
  'Benchmarking',
  'Budget Planning',
  'Engineering',
  'Fabrication',
  'Following Specifications',
  'Operations',
  'Performance Review',
  'Project Planning',
  'Quality Assurance',
  'Quality Control',
  'Scheduling',
  'Task Delegation',
  'Task Management',
  'Blogging',
  'Digital Photography',
  'Digital Media',
  'Facebook',
  'Instagram',
  'Networking',
  'Pinterest',
  'SEO',
  'Social Media Platforms',
  'Twitter',
  'Web Analytics',
  'Client Relations',
  'Email',
  'Requirements Gathering',
  'Research',
  'Subject Matter Experts (SMEs)',
  'Technical Documentation',
];

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class SkillsWidget extends Component {
  state = {
    selectedSkills: [],
    tabs: 1,
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {/*{ id: , category: , skill: } // {user_id: skill_id:}*/}
        <Nav
          className="nav-fill flex-column flex-md-row"
          id="tabs-icons-text"
          pills
          role="tablist"
        >
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 1}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 1,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 1)}
              href="#pablo"
              role="tab"
            >
              <i className="ni ni-cloud-upload-96 mr-2" />
              Leadership
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 2}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 2,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 2)}
              href="#pablo"
              role="tab"
            >
              <i className="ni ni-bell-55 mr-2" />
              Business and Entrepreneurship
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 3}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 3,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 3)}
              href="#pablo"
              role="tab"
            >
              <i className="ni ni-calendar-grid-58 mr-2" />
              Marketing, Branding and Sales
            </NavLink>
          </NavItem>
        </Nav>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={'tabs' + this.state.tabs}>
              <TabPane tabId="tabs1">
                <SearchOption skills={skills} />
              </TabPane>
              <TabPane tabId="tabs2">
                <SearchOption skills={skills2} />{' '}
              </TabPane>
              <TabPane tabId="tabs3">
                <SearchOption skills={skills} />{' '}
              </TabPane>
            </TabContent>
            <hr />
            {this.props.store.skillsholder.map((skill, i) => {
              return (
                <Badge key={i} color="primary" pill>
                  {skill.skill}
                  <span className={styles.cancelSkill}>
                    <i className="ni ni-fat-remove" />
                  </span>
                </Badge>
              );
            })}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsWidget);
