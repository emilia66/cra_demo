import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import "./index.css";

const ParticlesBgAnimation = () => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 5],
    v: [2, 5],
    tha: [-180, 180],
    // body: "./img/icon.png", // Whether to render pictures
    rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: -1,    // gravity
    f: [2, 1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  };

  return (
    <>
      <div>222</div>
      <ParticlesBg type="custom" config={config} bg={true} />
      {/* <ParticlesBg color="#fff000" type="lines" bg={true} /> */}
    </>
  )
}
export default ParticlesBgAnimation;