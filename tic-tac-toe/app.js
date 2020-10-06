  const { Component, Store } = owl;
  const { xml } = owl.tags;
  const { whenReady } = owl.utils;
  const { useRef, useDispatch, useState, useStore } = owl.hooks;


  const square_template = xml`
    <div>
      <div class="board-row">
        <button class = "square" t-att-id="1"></button>
        <button class = "square" t-att-id="2"></button>
        <button class = "square" t-att-id="3"></button>
      </div>
      <div class="board-row">
        <button class = "square" t-att-id="4"></button>
        <button class = "square" t-att-id="5"></button>
        <button class = "square" t-att-id="6"></button>
      </div>
      <div class="board-row">
        <button class = "square" t-att-id="7"></button>
        <button class = "square" t-att-id="8"></button>
        <button class = "square" t-att-id="9"></button>
      </div>
    </div>`;

  class Square extends Component {
    static template = square_template
   // static props = [""]
  }

  const board_template = xml`
    <div class="game">
      <div class="game-board">
        <Square />
      </div>
    </div>
    `
  class Board extends Component {
    static template = board_template
    static components = { Square };
  }

  // Setup code
  function setup() {
    owl.config.mode = "dev";
    const board = new Board();
    board.mount(document.body);
  }

  whenReady(setup);

