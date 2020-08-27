
# shopback-assignment

## Question-1: Manual Test cases

### Acceptance criteria:
1. PIN code contains a 12-digit number
2. One PIN code is only used to top up successfully for 1 phone number
3. The user is able to scan QR code in the phone card by tapping on the QR code button at the text field.
4. Once the user tap on "TOP UP" button after inputting valid PIN code and valid phone number, BE triggers to top up the amount of phone card to the inputted number.
5. If top-up fails, user can re-use that PIN code to retry
6. The "TOP UP" button is clickable only when PIN code and phone number are inputted
7. The validate message should be displayed below PIN code field when user input the numer is less than 12 digits: "PIN code should be a 12-digit number"
8. If top up fails because the PIN code is already used, it should display the error message below PIN code input field: "PIN code is already used"
9. If top up fails cause of invalid PIN code, it should display the error message below PIN code input field: "Invalid PIN code"
10. If top up fails cause of invalid phone number, it should display the error message below phone number input field: "Invalid phone number"
11. If top up fails more than 5 times, it should lock the top-up function
12. If top up fails because the network is so slow or it cannot get response from API, it should display the error message below "TOP UP" button: "Cannot retrieve data, please try again"

### Test cases:

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
			<td>
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>TP002</td>
			<td>High</td>
			<td>Verify that top up successfully with valid QR code</td>
			<td>
				<ol>
					<li>Scan QR code</li>
					<li>Input the valid phone number</li>
					<li>Tap&nbsp;on TOP UP button</li>
				</ol>
			</td>
			<td>
				<ul>
					<li>QR&nbsp;code =&nbsp;[Link to QR code]</li>
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
			<td>TP003</td>
			<td>High</td>
			<td>Verify that one PIN code is only used to top up successfully for 1 phone number</td>
			<td>
				<ol>
					<li>Input the valid PIN code</li>
					<li>Input the valid phone number</li>
					<li>Click on TOP UP button</li>
					<li>Retry all steps above</li>
				</ol>
			</td>
			<td>&nbsp;
				<ul>
					<li>PIN code = 123456789123</li>
					<li>Phone number = 0123456789</li>
				</ul>
			</td>
			<td>&nbsp;An error message should be displayed below PIN code field: "PIN code is already used"</td>
			<td>&nbsp;</td>
			<td>&nbsp;
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>TP004</td>
			<td>High</td>
			<td>Verify that top up fails with valid PIN code, user can retry it</td>
			<td>
				<ol>
					<li>Input the valid PIN code</li>
					<li>Input the valid phone number</li>
					<li>Click on TOP UP button</li>
					<li>Shutdown the network&nbsp;immediately</li>
					<li>Retry steps 1, 2, 3</li>
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
			<td>
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>TP005</td>
			<td>High</td>
			<td>Verify that top up fails more than 5 times, it should lock top up function</td>
			<td>
				<ol>
					<li>Input the <strong>invalid</strong> PIN code</li>
					<li>Input the valid phone number</li>
					<li>Click on TOP UP button</li>
					<li>Retry all steps 6 times</li>
				</ol>
			</td>
			<td>
				<ul>
					<li>PIN code =&nbsp;111111111111</li>
					<li>Phone number = 0123456789</li>
				</ul>
			</td>
			<td>
				<ol>
					<li>User cannot retry top up</li>
					<li>It should display an error message: "top up fails more than 5 times, this function is locked"</li>
				</ol>
			</td>
			<td>&nbsp;</td>
			<td>
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>TP006</td>
			<td>Normal</td>
			<td>Verify that the validate message displays when user inputs a number is less than 12 digits&nbsp;</td>
			<td>
				<ol>
					<li>Input the 11-digit PIN code</li>
					<li>Tap on phone number</li>
				</ol>
			</td>
			<td>PIN code = 12345678912</td>
			<td>An error message should be displayed below PIN code field: "PIN code should be a 12-digit number"</td>
			<td>&nbsp;</td>
			<td>
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>TP007</td>
			<td>Normal</td>
			<td>Verify that "TOP UP" button is clickable only when PIN code and phone number are inputted</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>"TOP UP" button is clickable only when PIN code and phone number are inputted</td>
			<td>&nbsp;</td>
			<td>
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>&nbsp;TP008</td>
			<td>Normal</td>
			<td>Verify that only number keyboard is displayed when user tap&nbsp;on PIN code and phone number field</td>
			<td>
				<ol>
					<li>Tap on PIN code field</li>
					<li>Tap on phone number field</li>
				</ol>
			</td>
			<td>&nbsp;</td>
			<td>&nbsp;Only number keyboard is displayed when user tap on PIN code and phone number field</td>
			<td>&nbsp;</td>
			<td>&nbsp;
				<ul>
					<li>- [x]</li>
				</ul>
			</td>
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
