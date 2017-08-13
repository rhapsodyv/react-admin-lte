import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import AdminLTE from './vendor/AdminLTE'

//só pra ver o eslint gritar no src/, mas nao encher o saco pelo adminlte!
const a = 1;

class NavBarLogo extends Component {
    render() {
        return (
            <a href="index2.html" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini">
                    {/*<img src="logo-icon.png" width="50"/>*/}
                    <b>A</b>LT
                </span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>
        );
    }
}

class NavbarDropMenu extends Component {
    render() {
        return (
            <li className={`dropdown ${this.props.className}`}>
                {/* Menu toggle button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className={`${this.props.iconClassName}`} />
                    <span className={`label ${this.props.iconLabelClassName}`}>{this.props.badge}</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="header">{this.props.headerText}</li>
                    <li>
                        {/* Inner Menu: contains the notifications */}
                        <ul className="menu">
                            {this.props.children}
                        </ul>
                    </li>
                    <li className="footer"><a href={this.props.buttonHref}>{this.props.buttonText}</a></li>
                </ul>
            </li>
        );
    }
}

class MessageMenu extends Component {
    render() {
        return (
            <NavbarDropMenu className="messages-menu" badge="4" headerText="You have 4 messages"
                            buttonText="See All Messages" buttonHref="#" iconClassName="fa fa-envelope-o" iconLabelClassName="label-success">
                <li>{/* start message */}
                    <a href="#">
                        <div className="pull-left">
                            {/* User Image */}
                            <img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        {/* Message title and timestamp */}
                        <h4>
                            Support Team
                            <small><i className="fa fa-clock-o" /> 5 mins</small>
                        </h4>
                        {/* The message */}
                        <p>Why not buy a new awesome theme?</p>
                    </a>
                </li>
                {/* end message */}
            </NavbarDropMenu>
        );
    }
}

class NotificationsMenu extends Component {
    render() {
        return (
            <NavbarDropMenu className="notifications-menu" badge="10" headerText="You have 10 notifications"
                            buttonText="View All" buttonHref="#" iconClassName="fa fa-bell-o" iconLabelClassName="label-warning">
                <li>{/* start notification */}
                    <a href="#">
                        <i className="fa fa-users text-aqua" /> 5 new members joined today
                    </a>
                </li>
                {/* end notification */}
            </NavbarDropMenu>
        );
    }
}

class TasksMenu extends Component {
    render() {
        return (
            <NavbarDropMenu className="tasks-menu" badge="9" headerText="You have 9 tasks"
                            buttonText="View all tasks" buttonHref="#" iconClassName="fa fa-flag-o" iconLabelClassName="label-danger">
                <li>{/* Task item */}
                    <a href="#">
                        {/* Task title and progress text */}
                        <h3>
                            Design some buttons
                            <small className="pull-right">20%</small>
                        </h3>
                        {/* The progress bar */}
                        <div className="progress xs">
                            {/* Change the css width attribute to simulate progress */}
                            <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                <span className="sr-only">20% Complete</span>
                            </div>
                        </div>
                    </a>
                </li>
                {/* end task item */}
            </NavbarDropMenu>
        );
    }
}

class UserMenu extends Component {
    render() {
        return (
            <li className="dropdown user user-menu"> {/* User Account Menu */}
                {/* Menu Toggle Button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    {/* The user image in the navbar*/}
                    <img src="adminlte/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                    {/* hidden-xs hides the username on small devices so only the image appears. */}
                    <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                    {/* The user image in the menu */}
                    <li className="user-header">
                        <img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                        </p>
                    </li>
                    {/* Menu Body */}
                    <li className="user-body">
                        <div className="row">
                            <div className="col-xs-4 text-center">
                                <a href="#">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                            </div>
                        </div>
                        {/* /.row */}
                    </li>
                    {/* Menu Footer*/}
                    <li className="user-footer">
                        <div className="pull-left">
                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                        </div>
                        <div className="pull-right">
                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }
}

class NavRightMenu extends Component {
    render() {
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <MessageMenu />
                    <NotificationsMenu />
                    <TasksMenu/>
                    <UserMenu/>

                    {/* Control Sidebar Toggle Button */}
                    <li>
                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                    </li>
                </ul>
            </div>
        );
    }
}

class MainSidebar extends Component {
    componentDidMount() {
        var adminlte = new AdminLTE();
        adminlte.init();
    }

    render() {
        return (
            <aside className="main-sidebar"> {/* Left side column. contains the logo and sidebar */}
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            {/* Status */}
                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form (Optional) */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                  </button>
                </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* Sidebar Menu */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">HEADER</li>
                        {/* Optionally, you can add icons to the links */}
                        <li className="active"><a href="#"><i className="fa fa-link" /> <span>Link</span></a></li>
                        <li><a href="#"><i className="fa fa-link" /> <span>Another Link</span></a></li>
                        <li className="treeview">
                            <a href="#"><i className="fa fa-link" /> <span>Multilevel</span>
                                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#">Link in level 2</a></li>
                                <li><a href="#">Link in level 2</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* /.sidebar-menu */}
                </section>
                {/* /.sidebar */}
            </aside>
        );
    }
}

class ContentWrapper extends Component {
    render() {
        return (
            <div className="content-wrapper">  {/* Content Wrapper. Contains page content */}
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Page Header
                        <small>Optional description</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Level</a></li>
                        <li className="active">Here</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content container-fluid">
                    {/*------------------------
                     | Your Page Content Here |
                     ------------------------*/}
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            {/* small box */}
                            <div className="small-box bg-aqua">
                                <div className="inner">
                                    <h3>150</h3>
                                    <p>New Orders</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-xs-6">
                            {/* small box */}
                            <div className="small-box bg-green">
                                <div className="inner">
                                    <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                                    <p>Bounce Rate</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-xs-6">
                            {/* small box */}
                            <div className="small-box bg-yellow">
                                <div className="inner">
                                    <h3>44</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-xs-6">
                            {/* small box */}
                            <div className="small-box bg-red">
                                <div className="inner">
                                    <h3>65</h3>
                                    <p>Unique Visitors</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}

                </section>
                {/* /.content */}
                {/* /.content-wrapper */}
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer"> {/* Main Footer */}
                {/* To the right */}
                <div className="pull-right hidden-xs">
                    Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright © 2017 <a href="#">DoctorCondo</a>.</strong> All rights reserved.
            </footer>
        );
    }
}

class MainHeader extends Component {
    render() {
        return (
            <header className="main-header"> {/* Main Header */}
                <NavBarLogo/>
                {/* Header Navbar */}
                <nav className="navbar navbar-static-top" role="navigation">
                    {/* Sidebar toggle button*/}
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    {/* Navbar Right Menu */}
                    <NavRightMenu/>
                </nav>
            </header>
        );
    }
}

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <MainHeader/>
            <MainSidebar/>
            <ContentWrapper/>
            <Footer/>
            {/*<ControlSidebar/>*/}
        </div>
    );
  }
}

export default App;
