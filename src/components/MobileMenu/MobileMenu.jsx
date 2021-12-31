import './mobile-menu.scss';
import React from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';



class MobileMenu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    }
    
    render(){
 
      const menu = ['Home','Shop','About','Beauty Blog','My account','My bag']
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
      });
      
      return(
        <div>
          <div className='container'>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} />
            <div className='mob-logo' style={{color: this.state.menuOpen ? 'blue' : 'black'}}> Textura </div>
            <div>Bag</div>
          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
        </div>
      )
    }
  }
  
  export default MobileMenu;
  
  
  
  
  
  
 