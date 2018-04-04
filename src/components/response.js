import React, { Component } from 'react';
import {Dimensions} from 'react-native';

const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;
function rpxh(h){
    if (!this.height) {
        var {height, width} = Dimensions.get('window');
        this.height = height;
        this.width = width;
    }
    return h / 2 * (this.height / BASE_WIN_HEIGHT);
}

function rpx(w){
    if (!this.width) {
        var {height, width} = Dimensions.get('window');
        this.height = height;
        this.width = width;
    }
    return w / 2 * (this.width / BASE_WIN_WIDTH);
}

export {rpx,rpxh}