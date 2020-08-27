
# shopback-assignment

## Question-1: Manual Test cases

### Acceptance criteria:
1. PIN code contains a 12-digit number
2. One PIN code is only used to top up successfully for 1 phone number
3. The user is able to scan QR code in the phone card by tapping on the QR code button at the text field.
4. Once the user tap on "TOP UP" button after inputting valid PIN code and valid phone number, BE triggers to top up the amount of phone card to the inputted number.
5. If top-up fails, user can re-use that PIN code to retry
6. The "TOP UP" button is clickable only when PIN code and phone number are inputted
7. If top up fails because the PIN code is already used, it should display the error message below PIN code input field: "PIN code is already used"
8. If top up fails cause of invalid PIN code, it should display the error message below PIN code input field: "Invalid PIN code"
9. If top up fails cause of invalid phone number, it should display the error message below phone number input field: "Invalid phone number"
10. If top up fails more than 5 times, it should lock the top-up function
11. If top up fails because the network is so slow or it cannot get response from API, it should display the error message below "TOP UP" button: "Cannot retrieve data, please try again"

### Test cases:

| Test case ID | Priority | Test Scenario | Test Steps &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           | Test Data | Expected Results | Actual Results | Pass/Fail | Automate 
| :---         | :---     | :---          | :---       | :---      | :---             | :---           | :---:     | :---:    
| TP001        | High     | Verify that top up successfully with valid data | <ol><li>Input the valid PIN code</li><li>Input the valid phone number</li><li>Click on TOP UP button</li></ol>| <ul><li>PIN code = 123456789123</li><li>Phone number = 0123456789</li></ul> | <ol><li>BE triggers to top up the amount of phone card to the inputted number</li><li>Successful message should be displayed</li></ol> |  |  | <ul><li>- [x] </li></ul> 

<table>
	<tbody>
		<tr>
			<th>Test case ID</th>
			<th>Priority</th>
			<th>Test Scenario</th>
			<th>Test Steps</th>
			<th>Test Data</th>
			<th>Expected Results</th>
			<th>Actual Results</th>
			<th>Automated</th>
		</tr>
		<tr>
			<td>TP001</td>
			<td>High</td>
			<td>Verify that top up successfully with valid data</td>
			<td>
				<ol>
					<li>Input the valid PIN code</li>
					<li>Input the valid phone number</li>
					<li>Click on TOP UP button</li>
				</ol>
			</td>
			<td>
				<ul>
					<li>PIN code = 123456789123</li>
					<li>Phone number = 0123456789</li>
				</ul>
			</td>
			<td>
				<ol>
					<li>BE triggers to top up the amount of phone card to the inputted number</li>
					<li>A successful message should be displayed</li>
				</ol>
			</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>
