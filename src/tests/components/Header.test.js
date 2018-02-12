import React from 'react'
import Header from '../../components/Header'
import ReactShadowRenderer from 'react-test-renderer/shallow'

test('should render Header correctly', () => {
    const renderer = new ReactShadowRenderer()
    renderer.render(<Header/>)
    console.log(renderer.getRenderOutput());
})