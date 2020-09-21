// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';
// import React from 'react';
// import {
//   ButtonToggle,
//   ButtonDropdown,
//   DropdownToggle,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';

// class BusinessList extends React.Component {
//   state = {
//     status: false, //'false' = '+' AND 'true' = '-'
//   };

//   cellToggle = (event) => {
//     this.setState({
//       status: !this.state.status,
//     });
//   };
//   //style={{styling goes here in JSX format}} add to element
//   render() {
//     return (
//       <tbody>
//         <tr>
//           <td onClick={this.cellToggle}>
//             {' '}
//             {this.state.status ? (
//               <i class="ni ni-fat-delete" />
//             ) : (
//               <i class="ni ni-fat-add" />
//             )}
//           </td>
//           <td>{/*{this.props.business.fields.Name}*/}</td>
//           <td>Test</td>
//           <td>Test</td>
//           <td>Test</td>
//         </tr>
//         {this.state.status ? (
//           <tr>
//             <td colSpan="4">test</td>
//           </tr>
//         ) : (
//           ''
//         )}
//       </tbody>
//     );
//   }
// }

// export default connect(mapStoreToProps)(BusinessList);
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

//import BootstrapTable from 'react-bootstrap-table-next';
//import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter'; //Want to add filtering

class BusinessList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
  };

  cellToggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    const closedFade = {
      top: '0',
      left: '0',
      backgroundImage: 'linear-gradient(to bottom, transparent, #f2f2f251)',
      transition: 'all 0.3s 0.08s ease-in-out',
    };

    const openFade = {
      top: '0',
      left: '0',
      backgroundImage: 'none',
      transition: 'all 0.3s 0.08s ease-in-out',
    };

    const closedHeight = {
      maxHeight: '50px',
      position: 'relative',
      top: '0',
      bottom: '0',
      overflow: 'hidden',
      zIndex: '0',
      transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };

    const openHeight = {
      maxHeight: '100%',
      position: 'relative',
      top: '0',
      // bottom: '0',
      overflow: 'hidden',
      zIndex: '999',
      // transform: 'translate(0, 50px)',
      transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };
    return (
      <>
        <Card
          //lg={9}
          className="p-3 bg-secondary"
          style={{
            // background: 'linear-gradient(to right, #ccace2, #823bae)',
            // opacity: '0.6',
            border: 'none',
          }}
        >
          <CardBody style={this.state.status ? openHeight : closedHeight}>
            <Row style={this.state.status ? openFade : closedFade}>
              <Col lg={1}>
                {this.state.status ? (
                  <i
                    onClick={this.cellToggle}
                    style={{ cursor: 'pointer' }}
                    className="ni ni-fat-delete m-1"
                  />
                ) : (
                  <i
                    onClick={this.cellToggle}
                    style={{ cursor: 'pointer' }}
                    className="ni ni-fat-add m-1"
                  />
                )}
              </Col>
              <Col lg={5}>
                <div style={{ width: '50%' }}>
                  {' '}
                  {this.props.business.fields['Organization Name']}
                </div>
                <p>{this.props.business.fields['Business Description']}</p>
                <p>
                  Address: {this.props.business.fields['Primary Address']}{' '}
                  {this.props.business.fields.City},{' '}
                  {this.props.business.fields.State}{' '}
                  {this.props.business.fields['Zip Code']}
                </p>
                <hr />
                {/* <div style={{ width: '50%' }}>
                {this.props.business.fields &&
                  this.props.business.fields['Speaker Photo'] &&
                  this.props.business.fields['Speaker Photo'][0] && (
                    <img
                      className="mt-2"
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '6px',
                      }}
                      src={this.props.business.fields['Speaker Photo'][0].url}
                      alt="speaker headshot"
                    />
                  )}
              </div> */}
                {/*<div style={{ width: '50%' }}>
                {this.props.speaker.fields['Speaker Photo'][0].url}
              </div>*/}
              </Col>
              <Col lg={4} style={{ borderRight: '1px solid orange' }}>
                <ul style={{ listStyleType: 'none' }}>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 m-1"
                    />
                    {this.props.business.fields.Email}
                  </li>
                  <li>
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button m-1"
                    />
                    {this.props.business.fields['Phone Number']}
                  </li>
                  <li>
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop m-1"
                    />
                    {this.props.business.fields.Website}
                  </li>
                </ul>
              </Col>
              {/*<Col lg={1}></Col>*/}
            </Row>
            <Row>
              <Col lg={1}></Col>
              <Col lg={9}>
                {/*<Row style={{ width: '100%' }}>*/}
                <p className="font-weight-light">
                  Womxn Owned?: {this.props.business.fields['Womxn Owned?']}
                </p>
                {/*</Row>*/}
              </Col>
              <Col lg={9} style={{ border: '1px solid orange' }}></Col>
              {/*<Col lg={1}></Col>*/}
            </Row>
          </CardBody>
        </Card>
      </>
      // <tbody>
      //   <tr>
      //     <td onClick={this.cellToggle}>
      //       {' '}
      //       {this.state.status ? (
      //         <i style={{ cursor: 'pointer' }} className="ni ni-fat-delete" />
      //       ) : (
      //         <i style={{ cursor: 'pointer' }} className="ni ni-fat-add" />
      //       )}
      //     </td>
      //     <td>
      //       <Button
      //         color="link"
      //         size="sm"
      //         href={this.props.speaker.fields['LinkedIn Profile']}
      //         target=" "
      //       >
      //         {this.props.speaker.fields.Name} {` `}
      //       </Button>
      //     </td>
      //     <td>
      //       <ul style={{ listStyleType: 'none' }}>
      //         <li>
      //           <i style={{ cursor: 'pointer' }} className="ni ni-email-83" />
      //           {this.props.speaker.fields.Email}
      //         </li>
      //         <li>
      //           <i
      //             style={{ cursor: 'pointer' }}
      //             className="ni ni-mobile-button"
      //           />
      //           {this.props.speaker.fields['Phone Number']}
      //         </li>
      //         <li>
      //           <i style={{ cursor: 'pointer' }} className="ni ni-laptop" />
      //           {this.props.speaker.fields['Website']}
      //         </li>
      //       </ul>
      //     </td>
      //   </tr>
      //   {this.state.status ? (
      //     <tr>
      //       {' '}
      //       {/*Want to add style so when the new row is added, there isn't a line separating the two rows.*/}
      //       <td>Random</td>
      //       <td style={{ overflowWrap: 'break-word', maxWidth: '50px' }}>
      //         {' '}
      //         <p style={{ overflowWrap: 'break-word' }}>
      //           {this.props.speaker.fields['Speaker Bio']}{' '}
      //         </p>
      //       </td>{' '}
      //       random
      //       {/*Can't seem to get the text contained. Maybe change table width?*/}
      //       {/* <tr>
      //         <td>
      //           <i class="fa fa-linkedin-square" />
      //         </td>
      //       </tr> */}
      //     </tr>
      //   ) : (
      //     ''
      //   )}
      // </tbody>
    );
  }
}

export default connect(mapStoreToProps)(BusinessList);
