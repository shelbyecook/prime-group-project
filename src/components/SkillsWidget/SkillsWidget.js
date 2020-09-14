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
  CardFooter,
} from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class SkillsWidget extends Component {
  state = {
    selectedSkills: [],
    tabs: 1,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SKILLS',
    });
  }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  removeSkill = (i) => {
    this.props.dispatch({
      type: 'REMOVE_SKILL',
      payload: i,
    });
  };
  render() {
    return (
      <div className="bg-secondary">
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
              Marketing, Branding and Sales
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 4}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 4,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 4)}
              href="#pablo"
              role="tab"
            >
              Technical
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 5}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 5,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 5)}
              href="#pablo"
              role="tab"
            >
              Accounting and Finance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 6}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 6,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 6)}
              href="#pablo"
              role="tab"
            >
              Legal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 7}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 7,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 7)}
              href="#pablo"
              role="tab"
            >
              Health and Wellness
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 8}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 8,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 8)}
              href="#pablo"
              role="tab"
            >
              Human Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 9}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 9,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 9)}
              href="#pablo"
              role="tab"
            >
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 10}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 10,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 10)}
              href="#pablo"
              role="tab"
            >
              Artists and Creatives
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 11}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 11,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 11)}
              href="#pablo"
              role="tab"
            >
              Community Advocacy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 12}
              className={classnames('mb-sm-3 mb-md-0', {
                active: this.state.tabs === 12,
              })}
              onClick={(e) => this.toggleNavs(e, 'tabs', 12)}
              href="#pablo"
              role="tab"
            >
              Civic Engagement
            </NavLink>
          </NavItem>
        </Nav>
        <Card className="shadow">
          <CardBody className="bg-secondary">
            <TabContent activeTab={'tabs' + this.state.tabs}>
              <TabPane tabId="tabs1">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.leadership && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.leadership}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs2">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.business && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.business}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs3">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.marketing && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.marketing}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs4">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.technical && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.technical}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs5">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.finance && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.finance}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs6">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.legal && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.legal}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs7">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.health && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.health}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs8">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.hr && (
                    <>
                      <SearchOption skills={this.props.store.skillsholder.hr} />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs9">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.education && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.education}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs10">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.creatives && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.creatives}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs11">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.communityAdvocacy && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.communityAdvocacy}
                      />
                    </>
                  )}
              </TabPane>
              <TabPane tabId="tabs12">
                {this.props.store &&
                  this.props.store.skillsholder &&
                  this.props.store.skillsholder.civicEngagement && (
                    <>
                      <SearchOption
                        skills={this.props.store.skillsholder.civicEngagement}
                      />
                    </>
                  )}
              </TabPane>
            </TabContent>
          </CardBody>
          <CardFooter className="bg-white">
            {this.props.store.memberskills.map((skill, i) => {
              let color = 'primary';
              if (skill.category_id === 1) {
                color = 'primary';
              } else if (skill.category === 'Business and Entrepreneurship') {
                color = 'info';
              }

              switch (skill.category_id) {
                case 1:
                  color = 'primary';
                  break;
                case 2:
                  color = 'info';
                  break;
                case 3:
                  color = 'secondary';
                  break;
                case 4:
                  color = 'success';
                  break;
                case 5:
                  color = 'danger';
                  break;
                case 6:
                  color = 'warning';
                  break;
                case 7:
                  color = 'primary';
                  break;
                case 8:
                  color = 'info';
                  break;
                case 9:
                  color = 'secondary';
                  break;
                case 10:
                  color = 'success';
                  break;
                case 11:
                  color = 'danger';
                  break;
                case 12:
                  color = 'warning';
                  break;
              }
              return (
                <Badge key={skill.id} color={color} pill>
                  {skill.skill}
                  <span className={styles.cancelSkill}>
                    <i
                      className="ni ni-fat-remove"
                      onClick={() => this.removeSkill(skill.id)}
                    />
                  </span>
                </Badge>
              );
            })}
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsWidget);
