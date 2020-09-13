import React, { Component } from 'react'; /*8.5K (gzipped: 3.4K)*/
import { connect } from 'react-redux'; /*13.3K (gzipped: 4.8K)*/
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'; /*26.5K(gzipped: 8.2K)*/

class ImageUpload extends Component {
  render() {
    const uploadOptions = {
      server: 'http://localhost:5000',
    };

    const s3Url = 'https://innovateher.s3.amazonaws.com';

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}

export default connect()(ImageUpload);
