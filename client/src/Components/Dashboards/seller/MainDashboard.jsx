import React from 'react'

function MainDashboard() 
{
  return (
    <div class="main-body app sidebar-mini ltr">
    <div class="page custom-index">

    <div class="main-header side-header sticky nav nav-item">
				<div class="container-fluid main-container ">
					<div class="main-header-left ">
						<div class="app-sidebar__toggle mobile-toggle" data-bs-toggle="sidebar">
							<a class="open-toggle"   href="javascript:void(0);"><i class="header-icons" data-eva="menu-outline"></i></a>
							<a class="close-toggle"   href="javascript:void(0);"><i class="header-icons" data-eva="close-outline"></i></a>
						</div>
						<div class="responsive-logo">
							<a href="index.html" class="header-logo"><img src="assets/img/brand/logo.png" class="logo-11"/></a>
							<a href="index.html" class="header-logo"><img src="assets/img/brand/logo-white.png" class="logo-1"/></a>
						</div>
						<ul class="header-megamenu-dropdown  nav">
							<li class="nav-item">
								<div class="btn-group dropdown">
									<button aria-expanded="false" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton2" type="button"><span><i class="fe fe-settings"></i> Settings </span></button>
									<div  class="dropdown-menu" >
										<div class="dropdown-menu-header header-img p-3">
											<div class="drop-menu-inner">
												<div class="header-content text-start d-flex">
												    <div class="text-white">
														<h5 class="menu-header-title">Setting</h5>
														<h6 class="menu-header-subtitle mb-0">Overview of theme</h6>
													</div>
													<div class="my-auto ms-auto">
														<span class="badge bg-pill bg-warning float-end">View all</span>
													</div>
												</div>
											</div>
										</div>
										<div class="setting-scroll">
											<div>
												<div class="setting-menu ">
													<a  class="dropdown-item"   href="profile.html"><i class="mdi mdi-account-outline tx-16 me-2 mt-1"></i>Profile</a>
													<a class="dropdown-item"   href="contacts.html"><i class="mdi mdi-account-box-outline tx-16 me-2"></i>Contacts</a>
													<a class="dropdown-item"   href="settings.html"><i class="mdi mdi-account-location tx-16 me-2"></i>Accounts</a>
													<div class="dropdown-divider"></div>
													<a class="dropdown-item"   href="about.html"><i class="typcn typcn-briefcase tx-16 me-2"></i>About us</a>
													<a class="dropdown-item"   href="javascript:void(0);"><i class="mdi mdi-application tx-16 me-2"></i>Getting start</a>
												</div>
											</div>
										</div>
										<ul class="setting-menu-footer flex-column ps-0">
											<li class="divider mb-0 pb-0 "></li>
											<li class="setting-menu-btn">
												<button class=" btn-shadow btn btn-success btn-sm">Cancel</button>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="nav-item">
								<div class="dropdown-menu-rounded btn-group dropdown" >
									<button aria-expanded="false" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton3" type="button"><span><i class="nav-link-icon fe fe-briefcase"></i> Projects </span></button>
									<div class="dropdown-menu-lg dropdown-menu"  x-placement="bottom-left">
										<div class="dropdown-menu-header">
											<div class="dropdown-menu-header-inner header-img p-3">
												<div class="header-content text-start d-flex">
												    <div class="text-white">
														<h5 class="menu-header-title">Projects</h5>
														<h6 class="menu-header-subtitle mb-0">Overview of Projects</h6>
													</div>
													<div class="my-auto ms-auto">
														<span class="badge bg-pill bg-warning float-end">View all</span>
													</div>
												</div>
											</div>
										</div>
										<a  class="dropdown-item  mt-2"   href="javascript:void(0);"><i class="dropdown-icon"></i>Mobile Application</a>
										<a class="dropdown-item"   href="javascript:void(0);"><i class="dropdown-icon"></i>PSD Projects</a>
										<a class="dropdown-item"   href="javascript:void(0);"><i class="dropdown-icon"></i>PHP Project</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item"   href="javascript:void(0);"><i class="dropdown-icon"></i>Wordpress Projects</a>
										<a class="dropdown-item mb-2"   href="javascript:void(0);"><i class="dropdown-icon "></i>HTML & CSS3 Projects</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<button class="navbar-toggler nav-link icon navresponsive-toggler vertical-icon ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
						<i class="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
					</button>
					<div class="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0  mg-lg-s-auto">
						<div class="collapse navbar-collapse" id="navbarSupportedContent-4">
							<div class="main-header-right">
								<div class="nav nav-item nav-link" id="bs-example-navbar-collapse-1">
									<form class="navbar-form" role="search">
										<div class="input-group">
											<input type="text" class="form-control" placeholder="Search"/>
											<span class="input-group-btn">
												<button type="reset" class="btn btn-default">
													<i class="fas fa-times"></i>
												</button>
												<button type="submit" class="btn btn-default nav-link">
													<i class="fe fe-search"></i>
												</button>
											</span>
										</div>
									</form>
								</div>
								<li class="dropdown nav-item main-layout">
									<a class="new theme-layout nav-link-bg layout-setting" >
										<span class="dark-layout"><i class="fe fe-moon"></i></span>
										<span class="light-layout"><i class="fe fe-sun"></i></span>
									</a>
								</li>
								<div class="nav nav-item  navbar-nav-right mg-lg-s-auto">
									<div class="nav-item full-screen fullscreen-button">
										<a class="new nav-link full-screen-link"   href="javascript:void(0);"><i class="fe fe-maximize"></i></a>
									</div>
									<div class="dropdown  nav-item main-header-message ">
										<a class="new nav-link"   href="javascript:void(0);" ><i class="fe fe-mail"></i><span class=" pulse-danger"></span></a>
										<div class="dropdown-menu">
											<div class="menu-header-content bg-primary-gradient text-start d-flex">
												<div class="">
													<h6 class="menu-header-title text-white mb-0">5 new Messages</h6>
												</div>
												<div class="my-auto mg-s-auto">
													<a class="badge bg-pill bg-warning float-end"   href="javascript:void(0);">Mark All Read</a>
												</div>
											</div>
											<div class="main-message-list chat-scroll">
												<a href="mail.html" class="p-3 d-flex border-bottom">
													<div class="drop-img  cover-image  " data-bs-image-src="assets/img/faces/3.jpg">
														<span class="avatar-status bg-teal"></span>
													</div>

													<div class="wd-90p">
														<div class="d-flex">
															<h5 class="mb-1 name">Paul Molive</h5>
															<p class="time mb-0 text-end ms-auto float-end">10 min ago</p>
														</div>
														<p class="mb-0 desc">I'm sorry but i'm not sure how...</p>
													</div>
												</a>
												<a href="mail.html" class="p-3 d-flex border-bottom">
													<div class="drop-img cover-image" data-bs-image-src="assets/img/faces/2.jpg">
														<span class="avatar-status bg-teal"></span>
													</div>
													<div class="wd-90p">
														<div class="d-flex">
															<h5 class="mb-1 name">Sahar Dary</h5>
															<p class="time mb-0 text-end ms-auto float-end">13 min ago</p>
														</div>
														<p class="mb-0 desc">All set ! Now, time to get to you now......</p>
													</div>
												</a>
												<a href="mail.html" class="p-3 d-flex border-bottom">
													<div class="drop-img cover-image" data-bs-image-src="assets/img/faces/9.jpg">
														<span class="avatar-status bg-teal"></span>
													</div>
													<div class="wd-90p">
														<div class="d-flex">
															<h5 class="mb-1 name">Khadija Mehr</h5>
															<p class="time mb-0 text-end ms-auto float-end">20 min ago</p>
														</div>
														<p class="mb-0 desc">Are you ready to pickup your Delivery...</p>
													</div>
												</a>
												<a href="mail.html" class="p-3 d-flex border-bottom">
													<div class="drop-img cover-image" data-bs-image-src="assets/img/faces/12.jpg">
														<span class="avatar-status bg-danger"></span>
													</div>
													<div class="wd-90p">
														<div class="d-flex">
															<h5 class="mb-1 name">Barney Cull</h5>
															<p class="time mb-0 text-end ms-auto float-end">30 min ago</p>
														</div>
														<p class="mb-0 desc">Here are some products ...</p>
													</div>
												</a>
												<a href="mail.html" class="p-3 d-flex border-bottom">
													<div class="drop-img cover-image" data-bs-image-src="assets/img/faces/5.jpg">
														<span class="avatar-status bg-teal"></span>
													</div>
													<div class="wd-90p">
														<div class="d-flex">
															<h5 class="mb-1 name">Petey Cruiser</h5>
															<p class="time mb-0 text-end ms-auto float-end">35 min ago</p>
														</div>
														<p class="mb-0 desc">I'm sorry but i'm not sure how...</p>
													</div>
												</a>
											</div>
											<div class="text-center dropdown-footer">
												<a href="mail.html">VIEW ALL</a>
											</div>
										</div>
									</div>
									<div class="dropdown nav-item main-header-notification">
										<a class="new nav-link"   href="javascript:void(0);"><i class="fe fe-bell"></i><span class=" pulse"></span></a>
										<div class="dropdown-menu">
											<div class="menu-header-content bg-primary-gradient text-start d-flex">
												<div class="">
													<h6 class="menu-header-title text-white mb-0">7 new Notifications</h6>
												</div>
												<div class="my-auto ms-auto">
													<a class="badge bg-pill bg-warning float-end"   href="javascript:void(0);">Mark All Read</a>
												</div>
											</div>
											<div class="main-notification-list Notification-scroll">
												<a class="d-flex p-3 border-bottom"   href="javascript:void(0);">
													<div class="notifyimg bg-success-transparent">
														<i class="la la-shopping-basket text-success"></i>
													</div>
													<div class="ms-3">
														<h5 class="notification-label mb-1">New Order Received</h5>
														<div class="notification-subtext">1 hour ago</div>
													</div>
													<div class="ms-auto" >
														<i class="las la-angle-right text-end text-muted"></i>
													</div>
												</a>
												<a class="d-flex p-3 border-bottom"   href="javascript:void(0);">
													<div class="notifyimg bg-danger-transparent">
														<i class="la la-user-check text-danger"></i>
													</div>
													<div class="ms-3">
														<h5 class="notification-label mb-1">22 verified registrations</h5>
														<div class="notification-subtext">2 hour ago</div>
													</div>
													<div class="ms-auto" >
														<i class="las la-angle-right text-end text-muted"></i>
													</div>
												</a>
												<a class="d-flex p-3 border-bottom"   href="javascript:void(0);">
													<div class="notifyimg bg-primary-transparent">
														<i class="la la-check-circle text-primary"></i>
													</div>
													<div class="ms-3">
														<h5 class="notification-label mb-1">Project has been approved</h5>
														<div class="notification-subtext">4 hour ago</div>
													</div>
													<div class="ms-auto" >
														<i class="las la-angle-right text-end text-muted"></i>
													</div>
												</a>
												<a class="d-flex p-3 border-bottom"   href="javascript:void(0);">
													<div class="notifyimg bg-pink-transparent">
														<i class="la la-file-alt text-pink"></i>
													</div>
													<div class="ms-3">
														<h5 class="notification-label mb-1">New files available</h5>
														<div class="notification-subtext">10 hour ago</div>
													</div>
													<div class="ms-auto" >
														<i class="las la-angle-right text-end text-muted"></i>
													</div>
												</a>
												<a class="d-flex p-3 border-bottom"   href="javascript:void(0);">
													<div class="notifyimg bg-warning-transparent">
														<i class="la la-envelope-open text-warning"></i>
													</div>
													<div class="ms-3">
														<h5 class="notification-label mb-1">New review received</h5>
														<div class="notification-subtext">1 day ago</div>
													</div>
													<div class="ms-auto" >
														<i class="las la-angle-right text-end text-muted"></i>
													</div>
												</a>
												<a class="d-flex p-3"   href="javascript:void(0);">
													<div class="notifyimg bg-purple-transparent">
														<i class="la la-gem text-purple"></i>
													</div>
													<div class="ms-3">
														<h5 class="notification-label mb-1">Updates Available</h5>
														<div class="notification-subtext">2 days ago</div>
													</div>
													<div class="ms-auto" >
														<i class="las la-angle-right text-end text-muted"></i>
													</div>
												</a>
											</div>
											<div class="dropdown-footer">
												<a   href="javascript:void(0);">VIEW ALL</a>
											</div>
										</div>
									</div>
									<div class="dropdown main-profile-menu nav nav-item nav-link">
										<a class="profile-user d-flex" href=""><img src="assets/img/faces/6.jpg" alt="user-img" class="rounded-circle mCS_img_loaded"/><span></span></a>

										<div class="dropdown-menu">
											<div class="main-header-profile header-img">
												<div class="main-img-user"><img alt="" src="assets/img/faces/6.jpg"/></div>
												<h6>Petey Cruiser</h6><span>Premium Member</span>
											</div>
											<a class="dropdown-item" href="profile.html"><i class="far fa-user"></i> My Profile</a>
											<a class="dropdown-item" href="profile.html"><i class="far fa-edit"></i> Edit Profile</a>
											<a class="dropdown-item" href="profile.html"><i class="far fa-clock"></i> Activity Logs</a>
											<a class="dropdown-item" href="profile.html"><i class="fas fa-sliders-h"></i> Account Settings</a>
											<a class="dropdown-item" href="signup.html"><i class="fas fa-sign-out-alt"></i> Sign Out</a>
										</div>
									</div>
									<div class="dropdown main-header-message right-toggle">
										<a class="nav-link pe-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
											<i class="ion ion-md-menu tx-20 bg-transparent"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


            <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
			<div class="sticky">
				<aside class="app-sidebar sidebar-scroll">
					<div class="main-sidebar-header active">
						<a class="desktop-logo logo-light active" href="index.html"><img src="assets/img/brand/logo.png" class="main-logo" alt="logo"/></a>
						<a class="desktop-logo logo-dark active" href="index.html"><img src="assets/img/brand/logo-white.png" class="main-logo" alt="logo"/></a>
						<a class="logo-icon mobile-logo icon-light active" href="index.html"><img src="assets/img/brand/favicon.png" alt="logo"/></a>
						<a class="logo-icon mobile-logo icon-dark active" href="index.html"><img src="assets/img/brand/favicon-white.png" alt="logo"/></a>
					</div>
					<div class="main-sidemenu">
						<div class="main-sidebar-loggedin">
							<div class="app-sidebar__user">
								<div class="dropdown user-pro-body text-center">
									<div class="user-pic">
										<img src="assets/img/faces/6.jpg" alt="user-img" class="rounded-circle mCS_img_loaded"/>
									</div>
									<div class="user-info">
										<h6 class=" mb-0 text-dark">Petey Cruiser</h6>
										<span class="text-muted app-sidebar__user-name text-sm">Administrator</span>
									</div>
								</div>
							</div>
						</div>
						<div class="sidebar-navs">
							<ul class="nav  nav-pills-circle">
								<li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Settings" aria-describedby="tooltip365540">
									<a class="nav-link text-center m-2">
										<i class="fe fe-settings"></i>
									</a>
								</li>
								<li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Chat" aria-describedby="tooltip143427">
									<a class="nav-link text-center m-2">
										<i class="fe fe-mail"></i>
									</a>
								</li>
								<li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Followers">
									<a class="nav-link text-center m-2">
										<i class="fe fe-user"></i>
									</a>
								</li>
								<li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Logout">
									<a class="nav-link text-center m-2">
										<i class="fe fe-power"></i>
									</a>
								</li>
							</ul>
						</div>
						<div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"/></svg></div>
						<ul class="side-menu ">
							<li class="slide">
								<a class="side-menu__item" href="index.html"><i class="side-menu__icon fe fe-airplay"></i><span class="side-menu__label">Dashboard</span></a>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-box"></i><span class="side-menu__label">Apps</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Apps</a></li>
									<li><a class="slide-item" href="cards.html">Cards</a></li>
									<li><a class="slide-item" href="darggablecards.html">Darggablecards</a></li>
									<li><a class="slide-item" href="rangeslider.html">Range-slider</a></li>
									<li><a class="slide-item" href="calendar.html">Calendar</a></li>
									<li><a class="slide-item" href="contacts.html">Contacts</a></li>
									<li><a class="slide-item" href="image-compare.html">Image-compare</a></li>
									<li><a class="slide-item" href="notification.html">Notification</a></li>
									<li><a class="slide-item" href="widget-notification.html">Widget-notification</a></li>
									<li><a class="slide-item" href="treeview.html">Treeview</a></li>
									<li><a class="slide-item" href="widgets.html">Widgets</a></li>
									<li class="sub-slide">
										<a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Mail</span><i class="sub-angle fe fe-chevron-down"></i></a>
										<ul class="sub-slide-menu">
											<li><a class="sub-side-menu__item" href="mail.html">Mail</a></li>
											<li><a class="sub-side-menu__item" href="mail-compose.html">Mail Compose</a></li>
											<li><a class="sub-side-menu__item" href="mail-read.html">Read-mail</a></li>
											<li><a class="sub-side-menu__item" href="mail-settings.html">mail-settings</a></li>
											<li><a class="sub-side-menu__item" href="chat.html">Chat</a></li>
										</ul>
									</li>
									<li class="sub-slide">
										<a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Maps</span><i class="sub-angle fe fe-chevron-down"></i></a>
										<ul class="sub-slide-menu">
											<li><a class="sub-side-menu__item" href="map-leaflet.html">Mapel Maps</a></li>
											<li><a class="sub-side-menu__item" href="map-vector.html">Vector Maps</a></li>
										</ul>
									</li>
									<li class="sub-slide">
										<a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">File-Manager</span><i class="sub-angle fe fe-chevron-down"></i></a>
										<ul class="sub-slide-menu">
											<li><a class="sub-side-menu__item" href="file-manager.html">File-Manager</a></li>
											<li><a class="sub-side-menu__item" href="file-manager-list.html">File-Manager-List</a></li>
											<li><a class="sub-side-menu__item" href="file-manager-details.html">File-Manager-Details</a></li>
											<li><a class="sub-side-menu__item" href="file-attachments.html">File-Attachments</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-award "></i><span class="side-menu__label">Icons</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Icons</a></li>
									<li><a class="slide-item" href="icons.html">Font Awesome </a></li>
									<li><a class="slide-item" href="icons-2.html">Material Design Icons</a></li>
									<li><a class="slide-item" href="icons-3.html">Simple Line Icons</a></li>
									<li><a class="slide-item" href="icons-4.html">Feather Icons</a></li>
									<li><a class="slide-item" href="icons-5.html">Ionic Icons</a></li>
									<li><a class="slide-item" href="icons-6.html">Flag Icons</a></li>
									<li><a class="slide-item" href="icons-7.html">Pe7 Icons</a></li>
									<li><a class="slide-item" href="icons-8.html">Themify Icons</a></li>
									<li><a class="slide-item" href="icons-9.html">Typicons Icons</a></li>
									<li><a class="slide-item" href="icons-10.html">Weather Icons</a></li>
									<li><a class="slide-item" href="icons-11.html">Material Icons</a></li>
									<li><a class="slide-item" href="icons-12.html">Bootstrap Icons</a></li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-layers "></i><span class="side-menu__label">Elements</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Elements</a></li>
									<li><a class="slide-item" href="alerts.html">Alerts</a></li>
									<li><a class="slide-item" href="avatar.html">Avatar</a></li>
									<li><a class="slide-item" href="breadcrumbs.html">Breadcrumbs</a></li>
									<li><a class="slide-item" href="buttons.html">Buttons</a></li>
									<li><a class="slide-item" href="badge.html">Badge</a></li>
									<li><a class="slide-item" href="dropdown.html">Dropdown</a></li>
									<li><a class="slide-item" href="thumbnails.html">Thumbnails</a></li>
									<li><a class="slide-item" href="images.html">Images</a></li>
									<li><a class="slide-item" href="list-group.html">List Group</a></li>
									<li><a class="slide-item" href="navigation.html">Navigation</a></li>
									<li><a class="slide-item" href="pagination.html">Pagination</a></li>
									<li><a class="slide-item" href="popover.html">Popover</a></li>
									<li><a class="slide-item" href="progress.html">Progress</a></li>
									<li><a class="slide-item" href="spinners.html">Spinners</a></li>
									<li><a class="slide-item" href="media-object.html">Media Object</a></li>
									<li><a class="slide-item" href="typography.html">Typography</a></li>
									<li><a class="slide-item" href="tooltip.html">Tooltip</a></li>
									<li><a class="slide-item" href="toast.html">Toast</a></li>
									<li><a class="slide-item" href="tags.html">Tags</a></li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-package "></i><span class="side-menu__label">Advanced UI</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Advanced Ui</a></li>
									<li><a class="slide-item" href="accordion.html">Accordion</a></li>
									<li><a class="slide-item" href="carousel.html">Carousel</a></li>
									<li><a class="slide-item" href="collapse.html">Collapse</a></li>
									<li><a class="slide-item" href="modals.html">Modals</a></li>
									<li><a class="slide-item" href="timeline.html">Timeline</a></li>
									<li><a class="slide-item" href="sweet-alert.html">Sweet Alert</a></li>
									<li><a class="slide-item" href="rating.html">Ratings</a></li>
									<li><a class="slide-item" href="counters.html">Counters</a></li>
									<li><a class="slide-item" href="search.html">Search</a></li>
									<li><a class="slide-item" href="userlist.html">Userlist</a></li>
									<li class="sub-slide">
										<a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Blog-Pages</span><i class="sub-angle fe fe-chevron-down"></i></a>
										<ul class="sub-slide-menu">
											<li><a class="sub-side-menu__item" href="blog.html">Blog</a></li>
											<li><a class="sub-side-menu__item" href="blog-details.html">Blog-Details</a></li>
											<li><a class="sub-side-menu__item" href="edit-post.html">Blog-Edit</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-file"></i><span class="side-menu__label">Forms</span><span class="badge bg-info side-badge">6</span><i class="angle fe fe-chevron-down  hor-angle"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Forms</a></li>
									<li><a class="slide-item" href="form-elements.html">Form Elements</a></li>
									<li><a class="slide-item" href="form-advanced.html">Advanced Forms</a></li>
									<li><a class="slide-item" href="form-layouts.html">Form Layouts</a></li>
									<li><a class="slide-item" href="form-validation.html">Form Validation</a></li>
									<li><a class="slide-item" href="form-wizards.html">Form Wizards</a></li>
									<li><a class="slide-item" href="form-editor.html">WYSIWYG Editor</a></li>
									<li><a class="slide-item" href="form-sizes.html">Form-Sizes</a></li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-bar-chart-2 "></i><span class="side-menu__label">Charts</span><span class="badge bg-danger side-badge">5</span><i class="angle fe fe-chevron-down hor-angle"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Charts</a></li>
									<li><a class="slide-item" href="chart-morris.html">Morris Charts</a></li>
									<li><a class="slide-item" href="chart-flot.html">Flot Charts</a></li>
									<li><a class="slide-item" href="chart-chartjs.html">ChartJS</a></li>
									<li><a class="slide-item" href="chart-echart.html">Echart</a></li>
									<li><a class="slide-item" href="chart-sparkline.html">Sparkline</a></li>
									<li><a class="slide-item" href="chart-peity.html">Chart-peity</a></li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-compass"></i><span class="side-menu__label">Pages</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Pages</a></li>
									<li><a class="slide-item" href="profile.html">Profile</a></li>
									<li><a class="slide-item" href="editprofile.html">Edit-Profile</a></li>
									<li><a class="slide-item" href="about.html">About-Us</a></li>
									<li><a class="slide-item" href="settings.html">Settings</a></li>
									<li><a class="slide-item" href="invoice.html">Invoice</a></li>
									<li><a class="slide-item" href="pricing.html">Pricing</a></li>
									<li><a class="slide-item" href="gallery.html">Gallery</a></li>
									<li><a class="slide-item" href="todotask.html">Todotask</a></li>
									<li><a class="slide-item" href="faq.html">Faqs</a></li>
									<li><a class="slide-item" href="empty.html">Empty Page</a></li>
									<li><a class="slide-item" href="Switcher-1.html">switcher-1</a></li>
									<li class="sub-slide">
										<a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Tables</span><i class="sub-angle fe fe-chevron-down"></i></a>
										<ul class="sub-slide-menu">
											<li><a class="sub-side-menu__item" href="table-basic.html">Basic Tables</a></li>
											<li><a class="sub-side-menu__item" href="table-data.html">Data Tables</a></li>
											<li><a class="sub-side-menu__item" href="edit-table.html">Edit Tables</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Submenus</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li class="side-menu__label1"><a href="javascript:void(0);">Submenus</a></li>
									<li><a class="slide-item"   href="javascript:void(0);">Level1</a></li>
									<li class="sub-slide">
										<a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Level-2</span><i class="sub-angle fe fe-chevron-down"></i></a>
										<ul class="sub-slide-menu">
											<li><a class="sub-side-menu__item" href="javascript:void(0);">Level-2.1</a></li>
											<li class="sub-slide2">
												<a class="sub-side-menu__item" data-bs-toggle="sub-slide2" href="javascript:void(0);"><span class="sub-side-menu__label">Level-2.2</span><i class="sub-angle2 fe fe-chevron-down"></i></a>
												<ul class="sub-slide-menu1">
													<li><a class="sub-slide-item2" href="javascript:void(0);">Level-2.2.1</a></li>
													<li><a class="sub-slide-item2" href="javascript:void(0);">Level-2.2.2</a></li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-shopping-cart"></i><span class="side-menu__label">Ecommerce</span><span class="badge bg-success side-badge">3</span><i class="angle fe fe-chevron-down  hor-angle"></i></a>
								<ul class="slide-menu">
									<li><a class="slide-item" href="products.html">Products</a></li>
									<li><a class="slide-item" href="product-details.html">Product-Details</a></li>
									<li><a class="slide-item" href="product-cart.html">Cart</a></li>
									<li><a class="slide-item" href="check-out.html">Check-out</a></li>
									<li><a class="slide-item" href="wish-list.html">Wish-list</a></li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-codepen "></i><span class="side-menu__label">Utilities</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li><a class="slide-item" href="background.html">Background</a></li>
									<li><a class="slide-item" href="border.html">Border</a></li>
									<li><a class="slide-item" href="display.html">Display</a></li>
									<li><a class="slide-item" href="flex.html">Flex</a></li>
									<li><a class="slide-item" href="height.html">Height</a></li>
									<li><a class="slide-item" href="margin.html">Margin</a></li>
									<li><a class="slide-item" href="padding.html">Padding</a></li>
									<li><a class="slide-item" href="position.html">Position</a></li>
									<li><a class="slide-item" href="width.html">Width</a></li>
									<li><a class="slide-item" href="extras.html">Extras</a></li>
								</ul>
							</li>
							<li class="slide">
								<a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-aperture"></i><span class="side-menu__label">Custom Pages</span><i class="angle fe fe-chevron-down"></i></a>
								<ul class="slide-menu">
									<li><a class="slide-item" href="signin.html">Sign In</a></li>
									<li><a class="slide-item" href="signup.html">Sign Up</a></li>
									<li><a class="slide-item" href="forgot.html">Forgot Password</a></li>
									<li><a class="slide-item" href="reset.html">Reset Password</a></li>
									<li><a class="slide-item" href="lockscreen.html">Lockscreen</a></li>
									<li><a class="slide-item" href="underconstruction.html">UnderConstruction</a></li>
									<li><a class="slide-item" href="404.html">404 Error</a></li>
									<li><a class="slide-item" href="500.html">500 Error</a></li>
								</ul>
							</li>
						</ul>

						<div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/></svg></div>
					</div>
				</aside>
			</div>



              <div class="main-content app-content">

                  <div class="main-container container-fluid">

                  <div class="breadcrumb-header justify-content-between">
						<div>
							<h4 class="content-title mb-2">Hi, welcome back!</h4>
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a   href="javascript:void(0);">Dashboard</a></li>
									<li class="breadcrumb-item active" aria-current="page">Project</li>
								</ol>
							</nav>
						</div>
						<div class="d-flex my-auto">
							<div class=" d-flex right-page">
								<div class="d-flex justify-content-center me-5">
									<div class="">
										<span class="d-block">
											<span class="label ">EXPENSES</span>
										</span>
										<span class="value">
											$53,000
										</span>
									</div>
									<div class="ms-3 mt-2">
										<span class="sparkline_bar"></span>
									</div>
								</div>
								<div class="d-flex justify-content-center">
									<div class="">
										<span class="d-block">
											<span class="label">PROFIT</span>
										</span>
										<span class="value">
											$34,000
										</span>
									</div>
									<div class="ms-3 mt-2">
										<span class="sparkline_bar31"></span>
									</div>
								</div>
							</div>
						</div>
					</div>


                    <div class="main-content-body">


                          <div class="row row-sm">
                              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                  <div class="card overflow-hidden project-card">
                                      <div class="card-body">
                                          <div class="d-flex">
                                              <div class="my-auto">
                                                  <svg enable-background="new 0 0 469.682 469.682" version="1.1" class="me-4 ht-60 wd-60 my-auto primary" viewBox="0 0 469.68 469.68" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="m120.41 298.32h87.771c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449h-87.771c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449z" />
                                                      <path d="m291.77 319.22h-171.36c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h171.36c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                      <path d="m291.77 361.01h-171.36c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h171.36c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                      <path d="m420.29 387.14v-344.82c0-22.987-16.196-42.318-39.183-42.318h-224.65c-22.988 0-44.408 19.331-44.408 42.318v20.376h-18.286c-22.988 0-44.408 17.763-44.408 40.751v345.34c0.68 6.37 4.644 11.919 10.449 14.629 6.009 2.654 13.026 1.416 17.763-3.135l31.869-28.735 38.139 33.959c2.845 2.639 6.569 4.128 10.449 4.18 3.861-0.144 7.554-1.621 10.449-4.18l37.616-33.959 37.616 33.959c5.95 5.322 14.948 5.322 20.898 0l38.139-33.959 31.347 28.735c3.795 4.671 10.374 5.987 15.673 3.135 5.191-2.98 8.232-8.656 7.837-14.629v-74.188l6.269-4.702 31.869 28.735c2.947 2.811 6.901 4.318 10.971 4.18 1.806 0.163 3.62-0.2 5.224-1.045 5.493-2.735 8.793-8.511 8.361-14.629zm-83.591 50.155-24.555-24.033c-5.533-5.656-14.56-5.887-20.376-0.522l-38.139 33.959-37.094-33.959c-6.108-4.89-14.79-4.89-20.898 0l-37.616 33.959-38.139-33.959c-6.589-5.4-16.134-5.178-22.465 0.522l-27.167 24.033v-333.84c0-11.494 12.016-19.853 23.51-19.853h224.65c11.494 0 18.286 8.359 18.286 19.853v333.84zm62.693-61.649-26.122-24.033c-4.18-4.18-5.224-5.224-15.673-3.657v-244.51c1.157-21.321-15.19-39.542-36.51-40.699-0.89-0.048-1.782-0.066-2.673-0.052h-185.47v-20.376c0-11.494 12.016-21.42 23.51-21.42h224.65c11.494 0 18.286 9.927 18.286 21.42v333.32z" />
                                                      <path d="m232.21 104.49h-57.47c-11.542 0-20.898 9.356-20.898 20.898v104.49c0 11.542 9.356 20.898 20.898 20.898h57.469c11.542 0 20.898-9.356 20.898-20.898v-104.49c1e-3 -11.542-9.356-20.898-20.897-20.898zm0 123.3h-57.47v-13.584h57.469v13.584zm0-34.482h-57.47v-67.918h57.469v67.918z" />
                                                  </svg>
                                              </div>
                                              <div class="project-content">
                                                  <h6>Invoices</h6>
                                                  <ul>
                                                      <li>
                                                          <strong>Processing</strong>
                                                          <span>5</span>
                                                      </li>

                                                      <li>
                                                          <strong>Paid</strong>
                                                          <span>56</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                  <div class="card  overflow-hidden project-card">
                                      <div class="card-body">
                                          <div class="d-flex">
                                              <div class="my-auto">
                                                  <svg enable-background="new 0 0 438.891 438.891" class="me-4 ht-60 wd-60 my-auto danger" version="1.1" viewBox="0 0 438.89 438.89" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="m347.97 57.503h-39.706v-17.763c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347-20.668-0.777-39.467 11.896-46.498 31.347h-30.302c-5.747 0-11.494 2.612-11.494 8.359v17.763h-39.707c-23.53 0.251-42.78 18.813-43.886 42.318v299.36c0 22.988 20.898 39.706 43.886 39.706h257.04c22.988 0 43.886-16.718 43.886-39.706v-299.36c-1.106-23.506-20.356-42.068-43.886-42.319zm-196.44-5.224h28.735c5.016-0.612 9.045-4.428 9.927-9.404 3.094-13.474 14.915-23.146 28.735-23.51 13.692 0.415 25.335 10.117 28.212 23.51 0.937 5.148 5.232 9.013 10.449 9.404h29.78v41.796h-135.84v-41.796zm219.43 346.91c0 11.494-11.494 18.808-22.988 18.808h-257.04c-11.494 0-22.988-7.314-22.988-18.808v-299.36c1.066-11.964 10.978-21.201 22.988-21.42h39.706v26.645c0.552 5.854 5.622 10.233 11.494 9.927h154.12c5.98 0.327 11.209-3.992 12.016-9.927v-26.646h39.706c12.009 0.22 21.922 9.456 22.988 21.42v299.36z" />
                                                      <path d="m179.22 233.57c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.363-14.629-0.522-4.047 4.24-4.047 10.911 0 15.151l21.42 21.943c1.854 2.076 4.532 3.224 7.314 3.135 2.756-0.039 5.385-1.166 7.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986 0.603-14.025-0.19-0.211-0.391-0.412-0.601-0.604z" />
                                                      <path d="m329.16 256.03h-120.16c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h120.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                      <path d="m179.22 149.98c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.364-14.629-0.522-4.047 4.24-4.047 10.911 0 15.151l21.42 21.943c1.854 2.076 4.532 3.224 7.314 3.135 2.756-0.039 5.385-1.166 7.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986 0.603-14.025-0.19-0.211-0.391-0.412-0.601-0.604z" />
                                                      <path d="m329.16 172.44h-120.16c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h120.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                      <path d="m179.22 317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.363-14.629-0.522-4.047 4.24-4.047 10.911 0 15.151l21.42 21.943c1.854 2.076 4.532 3.224 7.314 3.135 2.756-0.039 5.385-1.166 7.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986 0.603-14.025-0.19-0.21-0.391-0.411-0.601-0.604z" />
                                                      <path d="m329.16 339.63h-120.16c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h120.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                  </svg>
                                              </div>
                                              <div class="project-content">
                                                  <h6>Tasks</h6>
                                                  <ul>
                                                      <li>
                                                          <strong>Processing</strong>
                                                          <span>42</span>
                                                      </li>

                                                      <li>
                                                          <strong>Completed</strong>
                                                          <span>23</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                  <div class="card overflow-hidden project-card">
                                      <div class="card-body">
                                          <div class="d-flex">
                                              <div class="my-auto">
                                                  <svg enable-background="new 0 0 477.849 477.849" class="me-4 ht-60 wd-60 my-auto success" version="1.1" viewBox="0 0 477.85 477.85" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="m374.1 385.52c71.682-74.715 69.224-193.39-5.492-265.08-34.974-33.554-81.584-52.26-130.05-52.193-103.54-0.144-187.59 83.676-187.74 187.22-0.067 48.467 18.639 95.077 52.193 130.05l-48.777 65.024c-5.655 7.541-4.127 18.238 3.413 23.893s18.238 4.127 23.893-3.413l47.275-63.044c65.4 47.651 154.08 47.651 219.48 0l47.275 63.044c5.655 7.541 16.353 9.069 23.893 3.413 7.541-5.655 9.069-16.353 3.413-23.893l-48.775-65.024zm-135.54 24.064c-84.792-0.094-153.51-68.808-153.6-153.6 0-84.831 68.769-153.6 153.6-153.6s153.6 68.769 153.6 153.6-68.769 153.6-153.6 153.6z" />
                                                      <path d="m145.29 24.984c-33.742-32.902-87.767-32.221-120.67 1.521-32.314 33.139-32.318 85.997-8e-3 119.14 6.665 6.663 17.468 6.663 24.132 0l96.546-96.529c6.663-6.665 6.663-17.468 0-24.133zm-106.55 82.398c-12.186-25.516-1.38-56.08 24.136-68.267 13.955-6.665 30.175-6.665 44.131 0l-68.267 68.267z" />
                                                      <path d="m452.49 24.984c-33.323-33.313-87.339-33.313-120.66 0-6.663 6.665-6.663 17.468 0 24.132l96.529 96.529c6.665 6.663 17.468 6.663 24.132 0 33.313-33.322 33.313-87.338 0-120.66zm-14.08 82.449-68.301-68.301c19.632-9.021 42.79-5.041 58.283 10.018 15.356 15.341 19.371 38.696 10.018 58.283z" />
                                                      <path d="m238.56 136.52c-9.426 0-17.067 7.641-17.067 17.067v96.717l-47.787 63.71c-5.655 7.541-4.127 18.238 3.413 23.893s18.238 4.127 23.893-3.413l51.2-68.267c2.216-2.954 3.413-6.547 3.413-10.24v-102.4c1e-3 -9.426-7.64-17.067-17.065-17.067z" />
                                                  </svg>
                                              </div>
                                              <div class="project-content">
                                                  <h6>Estimates</h6>
                                                  <ul>
                                                      <li>
                                                          <strong>Processing</strong>
                                                          <span>2</span>
                                                      </li>

                                                      <li>
                                                          <strong>Accepted</strong>
                                                          <span>16</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                  <div class="card overflow-hidden project-card">
                                      <div class="card-body">
                                          <div class="d-flex">
                                              <div class="my-auto">
                                                  <svg enable-background="new 0 0 512 512" class="me-4 ht-60 wd-60 my-auto warning" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="m259.2 317.72h-6.398c-8.174 0-14.824-6.65-14.824-14.824 1e-3 -8.172 6.65-14.822 14.824-14.822h6.398c8.174 0 14.825 6.65 14.825 14.824h29.776c0-20.548-13.972-37.885-32.911-43.035v-33.74h-29.777v33.739c-18.94 5.15-32.911 22.487-32.911 43.036 0 24.593 20.007 44.601 44.601 44.601h6.398c8.174 0 14.825 6.65 14.825 14.824s-6.65 14.824-14.825 14.824h-6.398c-8.174 0-14.824-6.65-14.824-14.824h-29.777c0 20.548 13.972 37.885 32.911 43.036v33.739h29.777v-33.74c18.94-5.15 32.911-22.487 32.911-43.035 0-24.594-20.008-44.603-44.601-44.603z" />
                                                      <path d="m502.7 432.52c-7.232-60.067-26.092-111.6-57.66-157.56-27.316-39.764-65.182-76.476-115.59-112.06v-46.29l37.89-98.425-21.667-0.017c-6.068-4e-3 -8.259-1.601-13.059-5.101-6.255-4.559-14.821-10.802-30.576-10.814h-0.046c-15.726 0-24.292 6.222-30.546 10.767-4.799 3.487-6.994 5.081-13.041 5.081h-0.027c-6.07-5e-3 -8.261-1.602-13.063-5.101-6.255-4.559-14.821-10.801-30.577-10.814h-0.047c-15.725 0-24.293 6.222-30.548 10.766-4.8 3.487-6.995 5.081-13.044 5.081h-0.027l-21.484-0.017 36.932 98.721v46.117c-51.158 36.047-89.636 72.709-117.47 111.92-33.021 46.517-52.561 98.116-59.74 157.74l-9.304 77.285h512l-9.304-77.284zm-301.06-395.47c4.8-3.487 6.995-5.081 13.045-5.081h0.026c6.07 4e-3 8.261 1.602 13.062 5.101 6.255 4.559 14.821 10.802 30.578 10.814h0.047c15.725 0 24.292-6.222 30.546-10.767 4.799-3.487 6.993-5.081 13.041-5.081h0.026c6.068 5e-3 8.259 1.602 13.059 5.101 2.869 2.09 6.223 4.536 10.535 6.572l-21.349 55.455h-92.526l-20.762-55.5c4.376-2.041 7.773-4.508 10.672-6.614zm98.029 91.89v26.799h-83.375v-26.799h83.375zm-266.09 351.08 5.292-43.947c6.571-54.574 24.383-101.7 54.458-144.07 26.645-37.537 62.54-71.458 112.73-106.5h103.78c101.84 71.198 150.75 146.35 163.29 250.56l5.291 43.948h-444.85z" />
                                                  </svg>
                                              </div>
                                              <div class="project-content">
                                                  <h6>Revenue</h6>
                                                  <ul>
                                                      <li>
                                                          <strong>Earnings</strong>
                                                          <span>$15,425</span>
                                                      </li>
                                                      <li>
                                                          <strong>Expensive</strong>
                                                          <span>$8,147</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>



                          <div class="row row-sm ">
                              <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                  <div class="card overflow-hidden">
                                      <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                                          <div class="d-flex justify-content-between">
                                              <h4 class="card-title mg-b-10">Project Budget</h4>
                                              <i class="mdi mdi-dots-horizontal text-gray"></i>
                                          </div>
                                          <p class="tx-12 text-muted mb-2">The Project Budget is a tool used by project managers to estimate the total cost of a project. <a href="">Learn more</a></p>
                                      </div>
                                      <div class="card-body pd-y-7">
                                          <div class="area chart-legend mb-0">
                                              <div>
                                                  <i class="mdi mdi-album text-primary me-2"></i> Total Budget
                                              </div>
                                              <div>
                                                  <i class="mdi mdi-album text-pink me-2"></i>Amount Used
                                              </div>
                                          </div>
                                          <canvas id="project-budget" class="ht-300"></canvas>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                  <div class="card overflow-hidden">
                                      <div class="card-body pb-3">
                                          <div class="d-flex justify-content-between">
                                              <h4 class="card-title mg-b-10">project &amp; task</h4>
                                              <i class="mdi mdi-dots-horizontal text-gray"></i>
                                          </div>
                                          <p class="tx-12 text-muted mb-3">In project, a task is an activity that needs to be accomplished within a defined period of time or by a deadline. <a href="">Learn more</a></p>
                                          <div class="table-responsive mb-0 projects-stat tx-14">
                                              <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                                                  <thead>
                                                      <tr>
                                                          <th>Project &amp; Task</th>
                                                          <th>Status</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-primary-transparent text-primary d-inline-block me-2 text-center">U</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">UI Design</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-success">Completed</div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-pink-transparent text-pink d-inline-block text-center me-2">R</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Landing Page</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-warning">Pending</div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-success-transparent text-success d-inline-block me-2 text-center">W</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Website &amp; Blog</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-danger">Canceled</div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-purple-transparent text-purple d-inline-block me-2 text-center">P</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Product Development</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-teal">on-going</div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-danger-transparent text-danger d-inline-block me-2 text-center">L</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Logo Design</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-success">Completed</div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="row row-sm ">
							<div class="col-md-12 col-xl-12">
								<div class="card overflow-hidden review-project">
									<div class="card-body">
										<div class="d-flex justify-content-between">
											<h4 class="card-title mg-b-10">All Projects</h4>
											<i class="mdi mdi-dots-horizontal text-gray"></i>
										</div>
										<p class="tx-12 text-muted mb-3">A project is an activity to meet the creation of a unique product or service and thus activities that are undertaken to accomplish routine activities cannot be considered projects. <a href="">Learn more</a></p>
										<div class="table-responsive mb-0">
											<table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
												<thead>
													<tr>
														<th>Project</th>
														<th>Team Members</th>
														<th>Categorie</th>
														<th>Created</th>
														<th>Status</th>
														<th>Deadline</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div class="project-contain">
																<h6 class="mb-1 tx-13">Angular Project</h6>
															</div>
														</td>
														<td>
															<div class="image-grouped"><img class="profile-img brround" alt="profile image" src="assets/img/faces/11.jpg"/><img class="profile-img brround " alt="profile image" src="assets/img/faces/12.jpg"/><img class="profile-img brround" alt="profile image" src="assets/img/faces/2.jpg"/></div>
														</td>
														<td>Web Design</td>
														<td>01 Jan 2020</td>
														<td><span class="badge bg-primary-gradient">Ongoing</span></td>
														<td>15 March 2020</td>
													</tr>
													<tr>
														<td>
															<div class="project-contain">
																<h6 class="mb-1 tx-13">PHP Project</h6>
															</div>
														</td>
														<td>
															<div class="image-grouped"><img class="profile-img brround" alt="profile image" src="assets/img/faces/16.jpg"/><img class="profile-img brround " alt="profile image" src="assets/img/faces/8.jpg"/><img class="profile-img brround" alt="profile image" src="assets/img/faces/7.jpg"/></div>
														</td>
														<td>Web Development</td>
														<td>03 March 2020</td>
														<td><span class="badge bg-success-gradient">Ongoing</span></td>
														<td>15 Jun 2020</td>
													</tr>
													
													
												
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>

                    
                    
                    
                    </div>



                  </div>






              </div>




              <div class="main-footer ht-45">
			<div class="container-fluid pd-t-0-f ht-100p">
				<span> Copyright © 2022 <a href="javascript:void(0);" class="text-primary">PataMtaani Ltd</a>.All rights reserved.</span>
			</div>
		</div>


            



    </div>

    <a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>
    
    
    </div>
  )
}

export default MainDashboard