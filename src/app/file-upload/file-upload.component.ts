import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';
//const ipfsAPI = require('ipfs-api');
//import IpfsApi from 'ipfs-api';
import * as ipfsApi from 'ipfs-api';
import { createPureExpression } from '@angular/core/src/view/pure_expression';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

 // state: { added_file_hash: any; };
  ipfsApi: any;
  ipfsId: string;


  constructor() {
    // this.state = {
    //   added_file_hash: null
    // }
    // this.ipfsApi = ipfsApi('localhost', '5001')
    this.ipfsApi = ipfsApi('localhost', '5002')
   
    // bind methods
    this.captureFile = this.captureFile.bind(this);
    this.saveToIpfs = this.saveToIpfs.bind(this);
   // this.arrayBufferToString = this.arrayBufferToString.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ngOnInit() {
  }

  captureFile(event) {
    console.log("capturefile function called ");
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    console.log(file);
    let reader = new FileReader()
    //const reader = new FileReader();
    reader.onloadend = () => this.saveToIpfs(reader)
    // console.log(reader);
    reader.readAsArrayBuffer(file)
    // console.log("capturefile function called ");
  }

  saveToIpfs(reader) {
    const buffer = Buffer.from(reader.result)
    console.log(buffer)
    this.ipfsApi.add(buffer, { progress: (prog) => console.log(`received: ${prog}`) })
      .then((response) => {
        console.log(response)
        this.ipfsId = response[0].hash
        console.log(this.ipfsId)
        this.display(this.ipfsId)
        // ipfsApi.setState({ added_file_hash: ipfsId })
      }).catch((err) => {
        console.error(err)
      })
  }

  display(ipfsId) {

    console.log("display function called" + ipfsId)
    this.ipfsApi.cat(ipfsId, function (err, res) {
      if (err || !res) {
        return console.error('ipfs cat error', err, res)
      }
      document.getElementById('data').innerText = res.toString()
    })
  }

  // arrayBufferToString(arrayBuffer) {
  //   return String.fromCharCode.apply(null, new Uint16Array(arrayBuffer))
  // }

  handleSubmit(event) {
    event.preventDefault()
    // console.log("handle submit called");
  }
}
