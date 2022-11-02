import {Component, OnInit} from "@angular/core";

declare const $: any;
declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}
export const ROUTES: RouteInfo[] = [
	{path: "/dashboard", title: "Dashboard", icon: "dashboard", class: ""},
	{path: "/user-profile", title: "Admininstration", icon: "person", class: ""},
	{path: "/table-list", title: "Devices", icon: "content_paste", class: ""},
	{path: "/typography", title: "policies", icon: "library_books", class: ""},
	{path: "/icons", title: "Reports", icon: "bubble_chart", class: ""},
	{path: "/maps", title: "pop-edges", icon: "location_on", class: ""},
	{path: "/notifications", title: "Notifications", icon: "notifications", class: ""},
	// {path: "/upgrade", title: "Upgrade to PRO", icon: "unarchive", class: "active-pro"},
];

const admin = [
	{path: "/dashboard", title: "Dashboard", icon: "dashboard", class: ""},
	{path: "/user-profile", title: "Admininstration", icon: "person", class: ""},
	{path: "/table-list", title: "Devices", icon: "content_paste", class: ""},
	{path: "/typography", title: "policies", icon: "library_books", class: ""},
	{path: "/icons", title: "Reports", icon: "bubble_chart", class: ""},
	{path: "/maps", title: "pop-edges", icon: "location_on", class: ""},
	{path: "/notifications", title: "Notifications", icon: "notifications", class: ""},
];

const operator = [
	{path: "/dashboard", title: "Dashboard", icon: "dashboard", class: ""},
	{path: "/table-list", title: "Devices", icon: "content_paste", class: ""},
	{path: "/typography", title: "policies", icon: "library_books", class: ""},
];

const analtics = [
	{path: "/dashboard", title: "Dashboard", icon: "dashboard", class: ""},
	{path: "/icons", title: "Reports", icon: "bubble_chart", class: ""},
];

const roleControl = {
	admin,
	analtics,
	operator,
};

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
	menuItems: any[];

	constructor() {}

	ngOnInit() {
		// data from the local storage   .........
		let user = {
			name: "wasim",
			id: 1,
			role: ["operator",],
		};

		let routes = [];
		if (user.role.length > 1) {
			for (let role of user.role) {
				routes = [...routes, ...roleControl[role]];
			}
		} else {
			routes = roleControl[user.role[0]];
		}
		this.menuItems = routes.filter(menuItem => menuItem);
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
}
