import { Selector } from 'testcafe';
import { f } from './common';


fixture ("Sales Routine")
    .page ("http://erpnext.dev:8000/login");


test('Not really a test', async t => {

    // Init
	await f.login('Administrator', 'asdf1234')
	await f.wait(300).setTestSpeed(0.5)
    
	// Item
	await f.click_icon('Item')
	await f.click_primary_button()
	await f.wait_for_modal()
	await f.fill_field("item_code", "SM-G950FD")
	await f.fill_field("item_name", "Samsung Galaxy S8 - Dual Sim, Black")	
	await f.fill_field("item_group", "Products")
	await f.fill_field("standard_rate", "57900")
	await f.click_primary_button()
	
	await f.goto_desk()
	
	// Customer
	await f.click_icon('Customer')
	await f.click_primary_button()
	await f.wait_for_modal()
	await f.fill_field("customer_name", "Jane Doe")
	await f.fill_field("customer_type", "Individual")
	await f.fill_field("customer_group", "Individual", "in")
	await f.fill_field("territory", "India", "in")	
	await f.click_primary_button()

	await f.goto_desk()

	// Sales Order

	await f.click_icon("Sales Order")
	await f.click_primary_button()
	await f.fill_field("customer", "Jane Doe", "jan")
	await f.fill_field("delivery_date", "05-06-2017")
	var items = [{
		code: "SM-G950FD",
		qty: "2"
	}]
	await f.fill_items_table(items)
	await f.fill_field("taxes_and_charges", "India VAT 5%")
	await f.click_primary_button()
	await f.click_primary_button()
	await f.wait(3000)	
});
