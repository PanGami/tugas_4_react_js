import React, {Component} from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{

  constructor(props){
    super(props);
    this.state = {
      datalist:0,
      tampil:true
    };
    this.pilihPesanan = this.pilihPesanan.bind(this);
    this.nasipadang=this.nasipadang.bind(this);
    this.sate=this.sate.bind(this);
    this.soto=this.soto.bind(this);
    this.uduk=this.uduk.bind(this);
    this.kuning=this.kuning.bind(this);
    this.batal=this.batal.bind(this);
  }
  
  pilihPesanan(value,e){
    this.setState({[value]: e.target.value,tampil:true});
  }

  nasipadang(){
    this.setState({
      pesan:"Nasi Padang",
      jumlah: this.state.datalist + 1,
      tampil : true
    });
  }
  sate(){
    this.setState({
      pesan:"Nasi Padang",
      jumlah: this.state.datalist + 1,
      tampil : true
    });
  }
  soto(){
    this.setState({
      pesan:"Nasi Padang",
      jumlah: this.state.datalist + 1,
      tampil : true
    });
  }
  uduk(){
    this.setState({
      pesan:"Nasi Padang",
      jumlah: this.state.datalist + 1,
      tampil : true
    });
  }
  kuning(){
    this.setState({
      pesan:"Nasi Padang",
      jumlah: this.state.datalist + 1,
      tampil : true
    });
  }
  batal(){
    this.setState({
      pesan:"",
      jumlah: 0,
      tampil : false
    });
  }
  
  render(){
    return(
      <div>
          <h3>Daftar Makanan Yang Kami Sediakan :</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                  <center>
                    <button onClick={this.pesanan}>Pesan Sekarang</button>
                  </center>

                </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          <td>
            <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <input type="text" placeholder="Masukan Pesanan Anda" onChange={e => this.pilihPesanan("pesan",e)} />
          <input type="number" placeholder="Jumlah Pesanan" onChange={e => this.pilihPesanan("jumlah",e)} />
          <button onClick={this.batal}>Batalkan Semua Pesanan</button>

          {this.state.tampil === true ?(
            <div>
              <h3>Pesanan Anda : {this.state.pesan}</h3>
              <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
            </div>
          ):(
            <h1>
              <center>Anda Belum Memesan</center>
            </h1>
          )}
      </div>
    );
  }
}

export default MenuMakanan;