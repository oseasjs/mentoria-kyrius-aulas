/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { SiYoutube } from 'react-icons/si';

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

const videoValues = [
  {
    videoId: 'c_HvmKl2j5w',
    title: "Criação de Conta no Gmail",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJy216cO90bKYKMMZ2ii_-bJq7HmNVVNeAeWQdAD=s68-c-k-c0x00ffffff-no-rj',
    channelUrl: 'https://www.youtube.com/channel/UCp7TZTvJlQLpR09ghuYWfSg',
    channelName: "Luana Franco",
    descriptionCheckList: [
      {description: 'Email'},
      {description: 'Hangouts'},
      {description: 'Calendário'},
      {description: 'Drive na nuvem'},
      {description: 'Apresentações'}, 
      {description: 'Documentos'},
      {description: 'Planilhas'}, 
      {description: 'Fotos'},
      {description: 'OpenID'}
     ]
  }
  ,{
    videoId: 'hvdaCbQYAoo',
    title: "Configuração da Bios para aceitar boot pela USB",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJzxjowJickB4q7ElP0lalylxnZa0K9ff9IVr_sm3A=s68-c-k-c0x00ffffff-no-rj',
    channelUrl: 'https://www.youtube.com/channel/UCE0Wgv2k4NGACpf7RYv--cg',
    channelName: "Techno John",
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'LfWwncixwNI',
    title: "Instalando a Imagem do Ubuntu em um Pen Drive",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJzxjowJickB4q7ElP0lalylxnZa0K9ff9IVr_sm3A=s68-c-k-c0x00ffffff-no-rj',
    channelUrl: 'https://www.youtube.com/channel/UCE0Wgv2k4NGACpf7RYv--cg',
    channelName: "Techno John",
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'mLftT7Q25mo',
    title: "Pen Drive pronto, agora é só instalar o Ubuntu",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJzxjowJickB4q7ElP0lalylxnZa0K9ff9IVr_sm3A=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Techno John",
    channelUrl: 'https://www.youtube.com/channel/UCE0Wgv2k4NGACpf7RYv--cg',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'Vbd7K3FIhHI',
    title: "Instalação Chrome",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJxPeXbfHZxkLEoTVV66dx614nyE_0ZB43hs7OeuQg=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Diolinux",
    channelUrl: 'https://www.youtube.com/channel/UCEf5U1dB5a2e2S-XUlnhxSA',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'w0sANDwLUcA',
    title: "Instalação do Java e o Maven",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJyklTozwMUP7AWTjREmh5x8A8uxaRRVcOVOUtuZzw=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Luis Fernandes",
    channelUrl: 'https://www.youtube.com/channel/UCcPuWkmyUpgkIMKY9P3CC0Q',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'qJSIh_Fy2FI',
    title: "Instalação do IntelliJ Community",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJxIQfWsCodGON2AfZ65mZ7Gupdyrlm3cGygi7SPHA=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Marcos Azevedo",
    channelUrl: 'https://www.youtube.com/channel/UC9l968_q3tSQIRROvJPesow',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'gEyu8nnDYyo',
    title: "Instalação do Postman",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJw5l_EaL9iIaK0LDwOHHhRwIy5v6kZCt30Gzg1eyg=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Ceos3c",
    channelUrl: 'https://www.youtube.com/channel/UCDqZyVCTwg9UyRWKgQ7Gizg',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'qJSIh_Fy2FI',
    title: "Instalação do Docker e Docker-Compose",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJxIQfWsCodGON2AfZ65mZ7Gupdyrlm3cGygi7SPHA=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Marcos Azevedo",
    channelUrl: 'https://www.youtube.com/channel/UC9l968_q3tSQIRROvJPesow',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'YKjPi7Td3ZQ',
    title: "Instalação do Git e criação de uma conta no Github",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJxnWiJnObMVW98mf5KU6FuIm1HYQyR56iq07w7crw=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Professor José de Assis",
    channelUrl: 'https://www.youtube.com/channel/UCySbdH4Tt_l5W4gQJrNqm-Q',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'WmgI3urNSb0',
    title: "Aprendendo a usar o Duolingo para dar uma melhorada no Inglês",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJzZwCTcWAfT-qaM3zzrDsqzhSv8zh9Es62zo1Op=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Lucas Gilbert",
    channelUrl: 'https://www.youtube.com/channel/UCpZpEj5zANgCoBH-YcVM5Pg',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'EPbmAgJpiQI',
    title: "Ativando legendas em Português em vídeos do YouTube",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJxXIGevKS-eQak_CbzaXiq2H9vVdzF3UDN3Npq8piM=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Jefferson Meneses",
    channelUrl: 'https://www.youtube.com/channel/UCk70TYJHmZ_tsBKo-_SjP1w',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
  ,{
    videoId: 'DOSGFUeG3jo',
    title: "Easy man: no seu ritmo, no seu tempo",
    avatarUrl: 'https://yt3.ggpht.com/a/AATXAJyhg-2_7Bp4g0w7deB85gWxzX72YJdd0WjSU7Ve3Q=s68-c-k-c0x00ffffff-no-rj',
    channelName: "Amigoscode",
    channelUrl: 'https://www.youtube.com/channel/UC2KfmYEM4KCuA1ZurravgYw',
    descriptionCheckList: [
      {description: 'TODO'}
     ]
  }
    
]


class Environment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {videoValues};
  }

  render() {
    
    return (
      
      <>        
        <div className="content">

          {this.state.videoValues.map((videoValue) => {
            return (
              <Row>
                <Col md="3">
                  <Card className="card-user" style={{"height":"557px"}}>
                    <CardBody>
                      <div className="author">
                        <div className="block block-one" />
                        <div className="block block-two" />
                        <div className="block block-three" />
                        <div className="block block-four" />
                        <a href="#" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar"
                            src={videoValue.avatarUrl}
                          />                      
                        </a>
                        <h5 className="title">
                          <span>Canal: {videoValue.channelName}</span>
                          <br/>
                          <a href={videoValue.channelUrl} 
                            target="_blank"
                            style={{"font-size": "2.5rem"}}>
                            <SiYoutube />
                          </a> 
                        </h5>   
                        <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                          <span className="card-video-title-span">{videoValue.title}</span>
                        </h5>               
                      </div>
                      <div className="card-description">
                        {videoValue.descriptionCheckList.map((d) => {
                          return (
                            <div style={{"margin-left":"20px", "margin-top": "5px"}}>
                              <i className="tim-icons icon-check-2" />
                              {" " + d.description}
                              <br/>
                            </div>
                          )
                        })}                        
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-user">
                    <CardBody width="100">
                      <iframe src={"http://www.youtube.com/embed/" + videoValue.videoId + "?autoplay=0&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0"}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="" tabindex="-1" frameborder="0"
                        style={{"width": "100%", "height":"520px"}}>
                      </iframe>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )
          })}
          
        </div>

      </>
      
    );

  }
  
}

export default Environment;
