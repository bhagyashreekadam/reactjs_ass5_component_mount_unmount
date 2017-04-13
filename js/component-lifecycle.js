var Component = 
        React.createClass({
            update:function(){
                var clickCount = this.props.count+1;
                this.setProps({count:clickCount});
            },
            componentWillMount:function(){
                console.log("Component Will Mount Called!")
            },
            render:function(){
                console.log("Component Render Called!");
                return <button onClick={this.update}>{this.props.count}</button>
            },
            componentDidMount:function(){
                console.log("Component Did Mount Called!")
            },
            componentWillUnmount:function(){
                console.log("Component Unmounted Called!")
            },
    });

 window.renderComponent=function(){
     React.render(<Component count={0} />,document.getElementById('divContainer'));  
 }

 window.unmountComponent=function(){
     React.unmountComponentAtNode(document.getElementById('divContainer'));  
 }
 
    