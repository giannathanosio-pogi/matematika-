/* =====================================================================
   MATEMATIKA DATA FILE  (js/data.js)
   Edit this file to change study chapters, quiz questions or the music list.
   - T[]   : the 12 topics. Each has an icon (ic), name (n), subtitle (sub),
             study tip (tip) and the reviewer text (r) written as simple HTML.
             Use <h3> for every section so the reviewer builds its menu.
   - Q[t][tier] : questions for topic t at difficulty tier 0..3 (Easy..Hard).
             Format: ["question", ["option A","option B","option C","option D"], indexOfCorrectOption]
             Options are shuffled every time a question is shown.
   - TR[]  : background music tracks shown in the settings panel.
   ===================================================================== */

/* ===== BACKGROUND MUSIC (files are in assets/audio/) ===== */
const TR=[
{n:"Bubblaine \u2013 Seaside Kingdom",f:'assets/audio/bubblaine.mp3'},
{n:"Silhouette",f:'assets/audio/silhouette.mp3'},
{n:"Suave",f:'assets/audio/suave.mp3'},
{n:"Nap Time",f:'assets/audio/nap_time.mp3'},
{n:"Self Love",f:'assets/audio/self_love.mp3'},
{n:"First Sip",f:'assets/audio/first_sip.mp3'},
{n:"Afternoon FM",f:'assets/audio/afternoon_fm.mp3'},
{n:"Slow Day",f:'assets/audio/slow_day.mp3'}
];

/* ===== STUDY MODULES (from the MMW Complete Reviewer) ===== */
const T=[
{ic:"🌿",n:"Nature of Mathematics",
sub:"Mathematics in weather, population and pandemics, patterns in nature, the Fibonacci sequence and the golden ratio.",
tip:"Practice Fibonacci terms (1, 1, 2, 3, 5, 8…), remember φ ≈ 1.618, and never claim a natural object follows a pattern without checking measurements.",
r:`<h2>Nature of Mathematics</h2>
<h3>1.1 Meaning and nature of mathematics</h3>
<p>Mathematics studies quantity, shape, patterns, structure, order, and relationships. People express mathematical ideas through words, numbers, symbols, tables, diagrams, and graphs. Mathematics helps describe situations, test claims, make predictions, and solve problems.</p>
<div class="warn"><b>Examples:</b> a budget uses addition and subtraction, a map uses scale and distance, a weather forecast uses data and models, and a computer program uses logic and number systems.</div>
<h3>1.2 Mathematics in nature and society</h3>
<ul>
<li><p>Weather: models use temperature, pressure, humidity, wind speed, and past observations to estimate future conditions. A forecast is an estimate, not a guarantee.</p></li>
<li><p>Population: researchers use birth rates, death rates, migration, and age groups to estimate population change.</p></li>
<li><p>Pandemics: mathematical models describe how a disease might spread under stated assumptions. Results depend on data, behaviour, immunity, and public health measures.</p></li>
<li><p>Other fields: engineering, medicine, business, computer science, architecture, transport, music, and environmental science use mathematical tools.</p></li>
</ul>
<h3>1.3 Patterns in nature</h3>
<p>A pattern is an arrangement or sequence with a rule. Examples include repeating tiles, leaf arrangements, stripes, branching trees, and spiral patterns. Some natural patterns are close to mathematical models, but nature does not always follow a perfect rule.</p>
<h3>1.4 Fibonacci sequence</h3>
<p>In the common Fibonacci sequence, each term after the first two equals the sum of the previous two terms.</p>
<code>F₁ = 1, F₂ = 1, and Fₙ = Fₙ₋₁ + Fₙ₋₂</code>
<p>Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...</p>
<div class="warn"><b>Worked example:</b> Find the next term after 13 and 21. Add 13 + 21 = 34. The next term is 34.</div>
<p>Some plant arrangements and spiral counts resemble Fibonacci patterns. This does not mean every spiral or flower follows the sequence.</p>
<h3>1.5 Fibonacci spiral and rectangle</h3>
<p>A Fibonacci rectangle is formed from adjoining squares whose side lengths follow Fibonacci numbers. A quarter-circle drawn in each square creates an approximate spiral. The curve is an approximation, not a perfect natural law.</p>
<h3>1.6 Golden ratio</h3>
<code>φ = (1 + √5) / 2 ≈ 1.618</code>
<p>A golden rectangle has a longer side divided by a shorter side equal to approximately 1.618.</p>
<div class="warn"><b>Example:</b> A rectangle has a long side of 16.18 cm and a short side of 10 cm. Ratio = 16.18 ÷ 10 = 1.618, so the ratio is approximately the golden ratio.</div>
<div class="warn"><b>Exam reminder:</b> Do not claim every attractive object or natural object follows the golden ratio. Check the actual measurements.</div>
<h3>Quick review</h3>
<ul>
<li><p>Mathematics describes quantity, shape, order, pattern, and relationships.</p></li>
<li><p>A mathematical model depends on data and assumptions.</p></li>
<li><p>The next Fibonacci term is the sum of the two previous terms.</p></li>
<li><p>The golden ratio is about 1.618.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 1)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 1-1. Continue a Fibonacci-type sequence</h4>
<p><strong>Problem:</strong> In a Fibonacci-type sequence, the 4th term is 3 and the 5th term is 5. Find the 6th, 7th, and 8th terms.</p>
<div class="sol"><p><strong>Step 1.</strong> Rule: each term = sum of the two terms before it.</p>
<p><strong>Step 2.</strong> 6th term = 3 + 5 = 8. 7th term = 5 + 8 = 13. 8th term = 8 + 13 = 21.</p>
<p><strong>Answer: 8, 13, 21</strong></p></div>
<h4>Example 1-2. Test for the golden ratio</h4>
<p><strong>Problem:</strong> A picture frame is 24.3 cm long and 15 cm wide. Is it close to a golden rectangle?</p>
<div class="sol"><p><strong>Step 1.</strong> Ratio = longer side ÷ shorter side = 24.3 ÷ 15 = 1.62.</p>
<p><strong>Step 2.</strong> Compare with φ ≈ 1.618. The difference is only 0.002.</p>
<p><strong>Answer: Yes, the frame is approximately a golden rectangle.</strong></p></div>
<p><strong>Reverse problem:</strong> A golden rectangle has a short side of 20 cm. Long side = 20 × 1.618 = 32.36 cm.</p>
<h4>Example 1-3. Find the rule and the nth term of a pattern</h4>
<p><strong>Problem:</strong> Find the rule and the 20th term of 3, 7, 11, 15, ...</p>
<div class="sol"><p><strong>Step 1.</strong> Differences: 7 − 3 = 4, 11 − 7 = 4, 15 − 11 = 4. The pattern adds 4 each time.</p>
<p><strong>Step 2.</strong> The first term is 3, so the nth term = 3 + 4(n − 1) = 4n − 1.</p>
<p><strong>Step 3.</strong> 20th term = 4(20) − 1 = 79.</p>
<p><strong>Answer: add 4 each time; 20th term = 79</strong></p></div>
<h3>Practice Problems (Module 1)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 1-1.</strong> List the next three terms of the Fibonacci sequence after 21, 34.</p>
<details><summary>Show answer</summary><div class="warn"><strong>55, 89, 144.</strong> 21 + 34 = 55; 34 + 55 = 89; 55 + 89 = 144.</div></details>
<p><strong>Problem 1-2.</strong> A Fibonacci-type sequence starts with 2 and 5. Write the first eight terms.</p>
<details><summary>Show answer</summary><div class="warn"><strong>2, 5, 7, 12, 19, 31, 50, 81.</strong> Each term is the sum of the two before it.</div></details>
<p><strong>Problem 1-3.</strong> Compute 144 ÷ 89 to four decimal places. How close is it to the golden ratio?</p>
<details><summary>Show answer</summary><div class="warn"><strong>1.6180.</strong> 144 ÷ 89 ≈ 1.61798, which rounds to 1.6180 and is very close to 1.618. Ratios of consecutive Fibonacci numbers approach the golden ratio.</div></details>
<p><strong>Problem 1-4.</strong> A golden rectangle has a short side of 30 cm. Find its long side.</p>
<details><summary>Show answer</summary><div class="warn"><strong>48.54 cm.</strong> 30 × 1.618 = 48.54.</div></details>
<p><strong>Problem 1-5.</strong> A rectangle is 20 cm by 12 cm. Is it a golden rectangle? If not, what long side would a golden rectangle with a 12 cm short side have?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Not quite.</strong> 20 ÷ 12 ≈ 1.667, which is not 1.618. A golden rectangle with short side 12 cm has long side 12 × 1.618 ≈ 19.42 cm.</div></details>
<p><strong>Problem 1-6.</strong> Find the rule and the 15th term of 5, 9, 13, 17, ...</p>
<details><summary>Show answer</summary><div class="warn"><strong>Add 4; nth term = 4n + 1.</strong> 15th term = 4(15) + 1 = 61.</div></details>
<p><strong>Problem 1-7.</strong> A Fibonacci rectangle is built from squares with sides 1, 1, 2, 3, 5, and 8. Find the length and width of the whole rectangle and its area.</p>
<details><summary>Show answer</summary><div class="warn"><strong>13 by 8; area 104.</strong> Long side = 8 + 5 = 13, short side = 8. Area = 13 × 8 = 104. Check: 1 + 1 + 4 + 9 + 25 + 64 = 104.</div></details>`},
{ic:"🔣",n:"Mathematical Language & Symbols",
sub:"Translate English into expressions, then work with sets, functions, binary operations and basic logic.",
tip:"Watch the order in \"less than\" phrases, separate equal sets from equivalent sets, and check that every input of a function has exactly one output.",
r:`<h2>Mathematical Language &amp; Symbols</h2>
<h3>2.1 Mathematics as a language</h3>
<p>Mathematics is a language because it uses agreed symbols and rules to communicate ideas precisely. Vocabulary refers to the meanings of symbols and terms. Syntax refers to the order in which symbols are written. Grammar refers to rules for forming valid mathematical statements.</p>
<h3>2.2 Translating English into mathematical expressions</h3>
<p>Let x represent an unknown number.</p>
<ul>
<li><p>A number plus 7: x + 7</p></li>
<li><p>A number minus 7: x − 7</p></li>
<li><p>Seven less than a number: x − 7</p></li>
<li><p>Seven minus a number: 7 − x</p></li>
<li><p>Twice a number: 2x</p></li>
<li><p>The square of a number: x²</p></li>
<li><p>The quotient of a number and 4: x/4</p></li>
<li><p>A number is at least 10: x ≥ 10</p></li>
<li><p>A number is at most 10: x ≤ 10</p></li>
<li><p>A number is greater than 10: x &gt; 10</p></li>
<li><p>A number is not equal to 10: x ≠ 10</p></li>
</ul>
<p>Watch the order. 'Five less than x' means x − 5, not 5 − x.</p>
<h3>2.3 Sets</h3>
<p>A set is a well-defined collection of objects. The objects are called elements. Example: A = {2, 4, 6, 8}. The symbol ∈ means 'is an element of'. The symbol ∉ means 'is not an element of'.</p>
<h4>Types of sets</h4>
<ul>
<li><p>Universal set U: all elements being considered in a problem.</p></li>
<li><p>Empty set ∅: a set with no elements.</p></li>
<li><p>Finite set: a set with a limited number of elements.</p></li>
<li><p>Infinite set: a set with endlessly many elements.</p></li>
<li><p>Equal sets: sets with exactly the same elements.</p></li>
<li><p>Equivalent sets: sets with the same number of elements.</p></li>
<li><p>Unit set: a set with exactly one element.</p></li>
<li><p>Subset A ⊆ B: every element of A is also in B.</p></li>
<li><p>Complement Aᶜ: elements in U that are not in A.</p></li>
</ul>
<div class="warn"><b>Example:</b> U = {1, 2, 3, 4, 5}, A = {1, 3, 5}. Then Aᶜ = {2, 4}.</div>
<p>Union A ∪ B contains elements in A or B or both. Intersection A ∩ B contains elements shared by A and B.</p>
<h3>2.4 Relations and functions</h3>
<p>A relation connects elements from sets. A relation may pair one input with several outputs.</p>
<p>A function is a relation in which each input has exactly one output. Different inputs are allowed to share the same output.</p>
<div class="warn"><b>Example:</b> f(x) = 2x + 1. If x = 3, then f(3) = 2(3) + 1 = 7.</div>
<p>To check whether a mapping is a function, check each input. If one input points to two different outputs, the mapping is not a function.</p>
<h3>2.5 Binary operations</h3>
<p>A binary operation combines two elements from a set to produce a result. Addition and multiplication are binary operations on the real numbers because adding or multiplying two real numbers gives another real number.</p>
<p>Closure means the result stays in the set. Whole numbers are closed under addition, but not under subtraction because 2 − 5 = −3 is not a whole number.</p>
<h3>2.6 Logic basics</h3>
<p>A proposition is a statement that is either true or false. A question or command is not a proposition because it does not have a truth value.</p>
<p>A variable is a symbol, such as x, that stands for a value. A quantifier tells how many elements satisfy a statement.</p>
<ul>
<li><p>Universal quantifier ∀: 'for every' or 'for all'.</p></li>
<li><p>Existential quantifier ∃: 'there exists at least one'.</p></li>
</ul>
<div class="warn"><b>Example:</b> 'Every even integer is divisible by 2' uses a universal idea. 'There is an integer greater than 100' uses an existential idea.</div>
<h3>Quick review</h3>
<ul>
<li><p>Translate phrases carefully, especially 'less than' and 'less than a number'.</p></li>
<li><p>Equal sets have the same elements. Equivalent sets have the same number of elements.</p></li>
<li><p>Each input of a function has exactly one output.</p></li>
<li><p>A proposition has a truth value.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 2)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 2-1. Translate English phrases into expressions</h4>
<p><strong>Problem:</strong> Let x be a number. Write each phrase as an expression, then evaluate it at x = 6.</p>
<table>
<thead>
<tr>
<th><strong>Phrase</strong></th>
<th><strong>Expression</strong></th>
<th><strong>Value at x = 6</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Three less than twice a number</td>
<td>2x − 3</td>
<td>2(6) − 3 = 9</td>
</tr>
<tr>
<td>The product of 4 and the sum of x and 2</td>
<td>4(x + 2)</td>
<td>4(8) = 32</td>
</tr>
<tr>
<td>Five more than the quotient of a number and 3</td>
<td>x/3 + 5</td>
<td>6/3 + 5 = 7</td>
</tr>
<tr>
<td>The sum of a number and its square, decreased by 5</td>
<td>x + x² − 5</td>
<td>6 + 36 − 5 = 37</td>
</tr>
</tbody>
</table>
<div class="warn"><b>Watch the order:</b> "three less than twice a number" is 2x − 3, not 3 − 2x.</div>
<h4>Example 2-2. Set operations</h4>
<p><strong>Problem:</strong> U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, B = {1, 2, 3, 4, 5}. Find A ∪ B, A ∩ B, Aᶜ, and A ∩ Bᶜ.</p>
<div class="sol"><p><strong>A ∪ B</strong> (in A or B or both) = {1, 2, 3, 4, 5, 6, 8, 10}.</p>
<p><strong>A ∩ B</strong> (in both) = {2, 4}.</p>
<p><strong>Aᶜ</strong> (in U but not in A) = {1, 3, 5, 7, 9}.</p>
<p><strong>Bᶜ</strong> = {6, 7, 8, 9, 10}, so <strong>A ∩ Bᶜ</strong> = {6, 8, 10}.</p></div>
<div class="warn"><b>Extra tip:</b> a set with n elements has 2ⁿ subsets. A has 5 elements, so it has 2⁵ = 32 subsets.</div>
<h4>Example 2-3. Evaluate a function and test a relation</h4>
<p><strong>Problem:</strong> Let f(x) = 3x² − 2x + 1. Find f(−2) and f(4).</p>
<div class="sol"><p>f(−2) = 3(−2)² − 2(−2) + 1 = 3(4) + 4 + 1 = 17.</p>
<p>f(4) = 3(16) − 8 + 1 = 41.</p></div>
<p><strong>Is {(1,2), (2,3), (3,2), (1,5)} a function?</strong> No. The input 1 has two outputs, 2 and 5. Different inputs sharing an output (such as 1 and 3 both related to 2) is allowed.</p>
<h4>Example 2-4. Closure of a set under an operation</h4>
<p><strong>Problem:</strong> Decide whether each set is closed under the given operation.</p>
<div class="sol"><p>{0, 1} under addition: not closed, because 1 + 1 = 2 is not in the set.</p>
<p>Even integers under multiplication: closed, because an even number times an even number is even.</p>
<p>Odd integers under addition: not closed, because 3 + 5 = 8 is even.</p></div>
<h3>Practice Problems (Module 2)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 2-1.</strong> Translate: "six more than three times a number."</p>
<details><summary>Show answer</summary><div class="warn"><strong>3x + 6.</strong></div></details>
<p><strong>Problem 2-2.</strong> Translate: "the difference of a number and 9, divided by 2."</p>
<details><summary>Show answer</summary><div class="warn"><strong>(x − 9)/2.</strong> The parentheses show the subtraction happens first.</div></details>
<p><strong>Problem 2-3.</strong> Write using symbols: "a number is at least 4 and at most 9."</p>
<details><summary>Show answer</summary><div class="warn"><strong>4 ≤ x ≤ 9.</strong></div></details>
<p><strong>Problem 2-4.</strong> Evaluate 2x² − 3x + 4 when x = −1.</p>
<details><summary>Show answer</summary><div class="warn"><strong>9.</strong> 2(1) − 3(−1) + 4 = 2 + 3 + 4 = 9.</div></details>
<p><strong>Problem 2-5.</strong> U = {1, 2, 3, 4, 5, 6, 7, 8}, A = {1, 3, 5, 7}, B = {3, 4, 5, 6}. Find A ∪ B, A ∩ B, Aᶜ, and Bᶜ.</p>
<details><summary>Show answer</summary><div class="warn"><strong>A ∪ B</strong> = {1, 3, 4, 5, 6, 7}. <strong>A ∩ B</strong> = {3, 5}. <strong>Aᶜ</strong> = {2, 4, 6, 8}. <strong>Bᶜ</strong> = {1, 2, 7, 8}.</div></details>
<p><strong>Problem 2-6.</strong> Using the sets in Problem 2-5, find A ∩ Bᶜ.</p>
<details><summary>Show answer</summary><div class="warn"><strong>{1, 7}.</strong> Bᶜ = {1, 2, 7, 8}; the elements of A in it are 1 and 7.</div></details>
<p><strong>Problem 2-7.</strong> Which of these are functions? (a) {(1,4), (2,4), (3,5)} (b) {(1,2), (1,3), (2,5)} (c) {(a,1), (b,2), (c,3)}</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) yes, (b) no, (c) yes.</strong> In (b) the input 1 has two outputs. In (a) two inputs share the output 4, which is allowed.</div></details>
<p><strong>Problem 2-8.</strong> Let f(x) = 5 − 2x. Find f(3), f(−4), and the value of x for which f(x) = 1.</p>
<details><summary>Show answer</summary><div class="warn"><strong>f(3) = −1, f(−4) = 13, x = 2.</strong> For f(x) = 1: 5 − 2x = 1, so 2x = 4 and x = 2.</div></details>
<p><strong>Problem 2-9.</strong> Are the whole numbers closed under multiplication? Under division? Explain.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Multiplication: yes. Division: no.</strong> A whole number times a whole number is a whole number. But 1 ÷ 2 = 0.5 is not a whole number (and division by 0 is undefined).</div></details>
<p><strong>Problem 2-10.</strong> Which are propositions? (a) 9 is a prime number. (b) Close the door. (c) x + 3 = 7. (d) Is 5 odd?</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) is a proposition (false).</strong> (b) is a command and (d) is a question, so neither has a truth value. (c) is not a proposition until x is given a value, since it is true for x = 4 and false otherwise.</div></details>`},
{ic:"🧩",n:"Problem Solving & Reasoning",
sub:"Use a four-step plan, tell inductive from deductive reasoning, and spot common reasoning errors.",
tip:"Follow the four steps (understand, choose a plan, carry it out, check), and remember that one counterexample disproves a universal claim.",
r:`<h2>Problem Solving &amp; Reasoning</h2>
<h3>3.1 A practical problem-solving plan</h3>
<ol type="1">
<li><p>Understand the problem. Identify what is known and what must be found.</p></li>
<li><p>Choose a plan. Examples include drawing a diagram, making a table, finding a pattern, writing an equation, or working backward.</p></li>
<li><p>Carry out the plan carefully.</p></li>
<li><p>Check the result. Substitute it into the original problem or estimate whether the answer makes sense.</p></li>
</ol>
<div class="warn"><b>Example:</b> A notebook costs ₱35. You have ₱200. How much remains after buying three notebooks? Cost = 3 × 35 = ₱105. Remaining money = 200 − 105 = ₱95.</div>
<h3>3.2 Inductive reasoning</h3>
<p>Inductive reasoning uses examples or observed patterns to form a general rule. The conclusion is likely when the pattern is strong, but examples alone do not prove a rule for every case.</p>
<div class="warn"><b>Example:</b> 2, 4, 6, 8, ... suggests that the next number is 10. The pattern supports the prediction, but the rule must be stated to know for sure.</div>
<h3>3.3 Deductive reasoning</h3>
<p>Deductive reasoning uses general rules or premises to reach a conclusion. If the premises are true and the reasoning is valid, the conclusion must be true.</p>
<div class="warn"><b>Example:</b> All multiples of 4 are even. 28 is a multiple of 4. Therefore, 28 is even.</div>
<h3>3.4 Common reasoning errors</h3>
<ul>
<li><p>Hasty generalization: drawing a broad conclusion from too few examples.</p></li>
<li><p>Confusing correlation with cause: two things changing together does not prove one causes the other.</p></li>
<li><p>Ignoring counterexamples: one valid counterexample is enough to disprove a universal claim.</p></li>
<li><p>Invalid deduction: a conclusion does not follow from the stated premises.</p></li>
</ul>
<h3>Quick review</h3>
<p>Induction moves from examples toward a general pattern. Deduction applies a rule to a specific case. For written solutions, show the rule or evidence behind the conclusion.</p>
<h3>Problem-Solving Examples (Module 3)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 3-1. Four-step plan on a money problem</h4>
<p><strong>Problem:</strong> A pen costs ₱12 and a notebook costs ₱45. Ana buys 3 pens and 2 notebooks and pays with a ₱200 bill. How much change does she receive?</p>
<div class="sol"><p><strong>Understand:</strong> Known: prices, quantities, ₱200 paid. Find: the change.</p>
<p><strong>Plan:</strong> Total cost = pens + notebooks; change = 200 − total cost.</p>
<p><strong>Carry out:</strong> Pens = 3 × 12 = 36. Notebooks = 2 × 45 = 90. Total = 126. Change = 200 − 126 = 74.</p>
<p><strong>Check:</strong> 126 + 74 = 200. ✓</p>
<p><strong>Answer: ₱74</strong></p></div>
<h4>Example 3-2. Working backward</h4>
<p><strong>Problem:</strong> I think of a number, multiply it by 3, then subtract 4. The result is 20. What is my number?</p>
<div class="sol"><p>Undo each step in reverse order: 20 + 4 = 24, then 24 ÷ 3 = 8.</p>
<p><strong>Check:</strong> 8 × 3 = 24, and 24 − 4 = 20. ✓</p>
<p><strong>Answer: 8</strong></p></div>
<h4>Example 3-3. Writing an equation</h4>
<p><strong>Problem:</strong> Mark is 5 years older than twice Lia's age. The sum of their ages is 41. How old is each?</p>
<div class="sol"><p>Let Lia's age = x. Then Mark's age = 2x + 5.</p>
<p>x + (2x + 5) = 41, so 3x + 5 = 41, so 3x = 36 and x = 12.</p>
<p>Mark = 2(12) + 5 = 29. <strong>Check:</strong> 12 + 29 = 41. ✓</p>
<p><strong>Answer: Lia is 12 and Mark is 29.</strong></p></div>
<h4>Example 3-4. Inductive reasoning and a counterexample</h4>
<p><strong>Problem:</strong> The sequence 3, 6, 12, 24, ... suggests the rule "multiply by 2." Predict the next term and the 8th term.</p>
<div class="sol"><p>Next term = 24 × 2 = 48. The nth term is 3 × 2ⁿ⁻¹, so the 8th term = 3 × 2⁷ = 3 × 128 = 384.</p></div>
<p><strong>Why induction can fail:</strong> The claim "n² + n + 41 is prime for every whole number n" works for n = 0, 1, 2, ..., 39. But for n = 40: 40² + 40 + 41 = 1681 = 41 × 41, which is not prime. One counterexample disproves a universal claim.</p>
<h4>Example 3-5. Deductive reasoning</h4>
<p><strong>Problem:</strong> Premises: "Every number ending in 0 or 5 is divisible by 5." "135 ends in 5." What follows?</p>
<div class="sol"><p>Applying the general rule to the specific case: 135 is divisible by 5. This is valid deduction. Check: 135 ÷ 5 = 27. ✓</p></div>
<p><strong>Invalid example:</strong> "If it rains, the ground is wet. The ground is wet. So it rained." This does not follow, because the ground can be wet for other reasons (such as a sprinkler).</p>
<h4>Example 3-6. Draw a diagram or make a list: handshakes</h4>
<p><strong>Problem:</strong> Six people each shake hands once with every other person. How many handshakes occur?</p>
<div class="sol"><p>Person 1 shakes 5 hands, person 2 shakes 4 new hands, person 3 shakes 3, person 4 shakes 2, person 5 shakes 1.</p>
<p>Total = 5 + 4 + 3 + 2 + 1 = 15.</p>
<p><strong>Answer: 15 handshakes</strong></p></div>
<h3>Practice Problems (Module 3)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 3-1.</strong> Rica buys 4 bottles of juice at ₱28 each and 3 sandwiches at ₱42 each. She pays ₱500. How much change does she get?</p>
<details><summary>Show answer</summary><div class="warn"><strong>₱262.</strong> Juice = 4 × 28 = 112. Sandwiches = 3 × 42 = 126. Total = 238. Change = 500 − 238 = 262.</div></details>
<p><strong>Problem 3-2.</strong> Working backward: I think of a number, add 9, then double the result. I get 38. What is the number?</p>
<details><summary>Show answer</summary><div class="warn"><strong>10.</strong> 38 ÷ 2 = 19, then 19 − 9 = 10. Check: (10 + 9) × 2 = 38.</div></details>
<p><strong>Problem 3-3.</strong> The sum of two consecutive integers is 83. Find them.</p>
<details><summary>Show answer</summary><div class="warn"><strong>41 and 42.</strong> Let the integers be x and x + 1. Then 2x + 1 = 83, so x = 41.</div></details>
<p><strong>Problem 3-4.</strong> The length of a rectangle is 3 more than twice its width. The perimeter is 54 cm. Find the length and width.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Width 8 cm, length 19 cm.</strong> Width = w, length = 2w + 3. Perimeter: 2(3w + 3) = 54, so 3w + 3 = 27 and w = 8. Length = 19. Check: 2(8 + 19) = 54.</div></details>
<p><strong>Problem 3-5.</strong> For the sequence 2, 6, 18, 54, ..., find the rule, the next term, and the 7th term.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Multiply by 3; next term 162; 7th term 1458.</strong> nth term = 2 × 3ⁿ⁻¹, so 7th term = 2 × 3⁶ = 2 × 729 = 1458.</div></details>
<p><strong>Problem 3-6.</strong> For 1, 4, 9, 16, 25, ..., find the next term and the 12th term.</p>
<details><summary>Show answer</summary><div class="warn"><strong>36 and 144.</strong> The terms are the perfect squares n², so the 12th term is 12² = 144.</div></details>
<p><strong>Problem 3-7.</strong> Find the 25th term of 7, 10, 13, 16, ...</p>
<details><summary>Show answer</summary><div class="warn"><strong>79.</strong> First term 7, add 3 each time: 7 + 3(25 − 1) = 7 + 72 = 79.</div></details>
<p><strong>Problem 3-8.</strong> Ten people each shake hands once with every other person. How many handshakes occur?</p>
<details><summary>Show answer</summary><div class="warn"><strong>45.</strong> 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45.</div></details>
<p><strong>Problem 3-9.</strong> Give a counterexample to the claim: "For every whole number n, n² is greater than n."</p>
<details><summary>Show answer</summary><div class="warn"><strong>n = 0 or n = 1.</strong> 0² = 0 is not greater than 0, and 1² = 1 is not greater than 1.</div></details>
<p><strong>Problem 3-10.</strong> A shop sells 3 shirt designs and 4 pants designs. How many different shirt-and-pants outfits are possible?</p>
<details><summary>Show answer</summary><div class="warn"><strong>12.</strong> Make a table or tree: each of the 3 shirts pairs with each of the 4 pants, so 3 × 4 = 12.</div></details>
<p><strong>Problem 3-11.</strong> Identify the reasoning: (a) "Every dog I have seen at the park barks, so all dogs bark." (b) "All squares are rectangles. ABCD is a square. So ABCD is a rectangle." (c) "Ice cream sales and sunburn cases both rise in summer, so ice cream causes sunburn."</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Inductive, and a hasty generalization.</strong> <strong>(b) Deductive and valid.</strong> <strong>(c) Confuses correlation with cause;</strong> both rise because of hot weather and more time outdoors.</div></details>`},
{ic:"📊",n:"Data Management",
sub:"Sampling, organizing data, central tendency, spread, z-scores, probability, Bayes, normal and binomial models, correlation and regression.",
tip:"Write the formula, substitute, calculate, and label the answer. Know mean, median, mode, IQR fences, z-scores, Bayes and ŷ = a + bx.",
r:`<h2>Data Management</h2>
<h3>4.1 Data, population, and sample</h3>
<ul>
<li><p>Data: recorded facts, counts, measurements, or answers.</p></li>
<li><p>Population: the full group a study aims to understand.</p></li>
<li><p>Sample: the part of the population actually studied.</p></li>
<li><p>Parameter: a numerical description of a population.</p></li>
<li><p>Statistic: a numerical description calculated from a sample.</p></li>
<li><p>Qualitative data: labels or categories.</p></li>
<li><p>Quantitative data: numerical counts or measurements.</p></li>
</ul>
<h3>4.2 Data gathering and sampling</h3>
<p>A good study begins with a clear research question. The researcher defines the population, chooses a sampling method, gathers data consistently, and records limitations.</p>
<ul>
<li><p>Simple random sampling: each member has an equal chance of selection.</p></li>
<li><p>Systematic sampling: choose a random start, then select every kth member.</p></li>
<li><p>Stratified sampling: divide the population into groups, then sample from each group.</p></li>
<li><p>Cluster sampling: divide the population into clusters, randomly choose clusters, then study members within selected clusters.</p></li>
<li><p>Convenience sampling: select people who are easy to reach. This is fast but often biased.</p></li>
</ul>
<p>A common approximate sample-size formula for estimating a population proportion is n₀ = z²p(1 − p)/E², where z is the chosen normal critical value, p is the estimated proportion, and E is the desired margin of error. If p is unknown, 0.5 gives the largest estimate under this formula. The formula assumes a suitable sampling design and does not remove bias.</p>
<h3>4.3 Organizing data</h3>
<p>A frequency table lists values or categories and their counts. A cross-tabulation compares two categorical variables. A pivot table summarizes data by selected rows, columns, and values.</p>
<p>A Pareto chart orders categories from highest frequency to lowest and often adds a cumulative percentage line. It helps show which categories account for the largest share.</p>
<p>A scatter plot displays paired numerical values as points. Look for direction, form, strength, clusters, and unusual points.</p>
<h3>4.4 Measures of central tendency</h3>
<p>Mean: add all values and divide by the number of values.</p>
<code>Mean = Σx / n</code>
<div class="warn"><b>Example:</b> Data = 2, 4, 6, 8. Mean = (2 + 4 + 6 + 8) / 4 = 5.</div>
<p>Median: arrange values in order. For an odd count, choose the middle value. For an even count, average the two middle values.</p>
<div class="warn"><b>Example:</b> 3, 5, 7, 9, 12 has median 7. For 3, 5, 7, 9, the median is (5 + 7)/2 = 6.</div>
<p>Mode: the value or category that occurs most often. A data set may have one mode, several modes, or no repeated mode.</p>
<p>Weighted mean: multiply each value by its weight, add the products, then divide by the sum of weights.</p>
<code>Weighted mean = Σ(wx) / Σw</code>
<h3>4.5 Measures of dispersion</h3>
<p>Range = maximum − minimum.</p>
<p>Variance measures the average squared distance from the mean. Standard deviation is the square root of variance.</p>
<code>Population variance: σ² = Σ(x − μ)² / N</code><br>
<code>Sample variance: s² = Σ(x − x̄)² / (n − 1)</code><br>
<code>Standard deviation: square root of the variance</code>
<p>Use N for a full population and n − 1 in the usual sample variance formula. Always check which version the question asks for.</p>
<h3>4.6 Five-number summary and boxplot</h3>
<p>The five-number summary consists of minimum, first quartile Q1, median Q2, third quartile Q3, and maximum.</p>
<code>IQR = Q3 − Q1</code>
<p>A common outlier check uses the lower fence Q1 − 1.5(IQR) and upper fence Q3 + 1.5(IQR). Values outside the fences are flagged as possible outliers. Different classes or software might use different quartile rules, so follow your module's rule.</p>
<p>A boxplot shows the median, quartiles, spread, and possible outliers. The box extends from Q1 to Q3. The line inside the box marks the median.</p>
<h3>4.7 Relative position</h3>
<p>A percentile tells the position of a value relative to a group. The 80th percentile is a value at or below which about 80% of observations fall, under the chosen percentile rule.</p>
<p>A z-score measures how many standard deviations a value lies from the mean.</p>
<code>z = (x − μ) / σ</code>
<div class="warn"><b>Example:</b> Mean = 70, standard deviation = 5, score = 80. z = (80 − 70)/5 = 2. The score is two standard deviations above the mean.</div>
<h3>4.8 Probability basics</h3>
<p>Probability ranges from 0 to 1. A value of 0 means impossible under the model. A value of 1 means certain under the model.</p>
<code>P(A) = number of favourable outcomes / number of equally likely outcomes</code>
<p>This simple formula applies only when outcomes are equally likely. For a fair six-sided die, P(rolling a 4) = 1/6.</p>
<p>Complement rule: P(not A) = 1 − P(A).</p>
<p>Addition rule: P(A or B) = P(A) + P(B) − P(A and B). If A and B cannot occur together, P(A and B) = 0.</p>
<p>Multiplication rule for independent events: P(A and B) = P(A)P(B). Independence must be justified.</p>
<h3>4.9 Bayes' theorem</h3>
<code>P(A|B) = [P(B|A)P(A)] / P(B)</code>
<p>Bayes' theorem updates the probability of A after observing B. P(A) is the prior probability, P(B|A) is the likelihood, and P(A|B) is the updated probability.</p>
<div class="warn"><b>Example:</b> A condition affects 1% of a group. A test is positive for 90% of people with the condition and false-positive for 5% without it. For 10,000 people, about 100 have the condition, and 90 of them test positive. Of the 9,900 without the condition, about 495 test positive. Total positive results = 585. The chance of having the condition after a positive result is about 90/585 = 15.38%. This example shows why the base rate matters.</div>
<h3>4.10 Discrete probability distributions</h3>
<p>A discrete random variable has countable possible values. A probability distribution lists each value and its probability. Every probability must be between 0 and 1, and all probabilities must sum to 1.</p>
<code>Expected value: E(X) = Σ[xP(x)]</code>
<div class="warn"><b>Example:</b> X equals 0 with probability 0.25 and 2 with probability 0.75. E(X) = 0(0.25) + 2(0.75) = 1.5.</div>
<h3>4.11 Normal distribution</h3>
<p>A normal distribution is bell-shaped and symmetric around its mean. The mean and median are equal in an ideal normal distribution. The standard normal distribution has mean 0 and standard deviation 1.</p>
<p>The empirical rule for an approximately normal distribution: about 68% of values fall within 1 standard deviation of the mean, about 95% within 2, and about 99.7% within 3.</p>
<p>To convert x to a standard score, use z = (x − μ)/σ. Use the z-table or approved calculator to find the related area or probability.</p>
<h3>4.12 Binomial distribution</h3>
<p>A binomial model applies when there are a fixed number n of independent trials, each trial has two outcomes, and the success probability p stays the same.</p>
<code>P(X = k) = C(n,k) pᵏ(1 − p)ⁿ⁻ᵏ</code>
<p>Here C(n,k) = n!/[k!(n − k)!]. The mean is np and the variance is np(1 − p). A normal approximation is sometimes suitable when np and n(1 − p) are both sufficiently large. Follow your instructor's rule for the required cutoff.</p>
<h3>4.13 Correlation and regression</h3>
<p>Correlation measures the direction and strength of a linear relationship between two numerical variables. Pearson's correlation coefficient r ranges from −1 to +1.</p>
<ul>
<li><p>r near +1: strong positive linear relationship.</p></li>
<li><p>r near −1: strong negative linear relationship.</p></li>
<li><p>r near 0: little or no linear relationship. A curved relationship might still exist.</p></li>
<li><p>Correlation does not prove causation.</p></li>
<li><p>Outliers can strongly affect correlation and regression.</p></li>
</ul>
<p>A common regression-line form is ŷ = a + bx. The value b is the slope. The value a is the intercept. x is the explanatory variable and ŷ is the predicted response.</p>
<div class="warn"><b>Example:</b> ŷ = 12 + 3x. If x = 4, then ŷ = 12 + 3(4) = 24. The model predicts y = 24 when x = 4.</div>
<p>A significance test for correlation often tests H₀: ρ = 0 against an alternative. The p-value helps determine whether the observed relationship provides evidence of a nonzero population correlation. Statistical significance does not prove practical importance or causation.</p>
<h3>Excel and SPSS reminders</h3>
<ul>
<li><p>Keep each variable in its own column and each observation in a row.</p></li>
<li><p>Label columns clearly and check for missing or wrongly entered values.</p></li>
<li><p>Use a scatter plot before interpreting correlation.</p></li>
<li><p>In Excel, CORREL(array1,array2) returns Pearson's correlation coefficient.</p></li>
<li><p>Descriptive Statistics tools report measures such as mean, standard deviation, minimum, and maximum.</p></li>
<li><p>Record which variables you selected and which options you used so the analysis is repeatable.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 4)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 4-1. Mean, median, mode, and range</h4>
<p><strong>Problem:</strong> Find the mean, median, mode, and range of 12, 15, 11, 15, 18, 20, 15, 9.</p>
<div class="sol"><p><strong>Order the data:</strong> 9, 11, 12, 15, 15, 15, 18, 20 (n = 8).</p>
<p><strong>Mean</strong> = <span class="mth"><span class="fr"><span class="n">12 + 15 + 11 + 15 + 18 + 20 + 15 + 9</span><span class="d">8</span></span> = <span class="fr"><span class="n">115</span><span class="d">8</span></span> = 14.375</span></p>
<p><strong>Median:</strong> n is even, so average the 4th and 5th values: (15 + 15) ÷ 2 = 15.</p>
<p><strong>Mode:</strong> 15 appears three times, more than any other value.</p>
<p><strong>Range</strong> = 20 − 9 = 11.</p></div>
<h4>Example 4-2. Weighted mean (grade-point average)</h4>
<p><strong>Problem:</strong> Find the weighted average grade: Math (3 units) 1.75, English (3 units) 1.50, PE (2 units) 1.25, Science (4 units) 2.00.</p>
<div class="sol"><p>Σ(wx) = 3(1.75) + 3(1.50) + 2(1.25) + 4(2.00) = 5.25 + 4.50 + 2.50 + 8.00 = 20.25.</p>
<p>Σw = 3 + 3 + 2 + 4 = 12.</p>
<p>Weighted mean = <span class="mth"><span class="fr"><span class="n">20.25</span><span class="d">12</span></span> = 1.6875 ≈ 1.69</span></p></div>
<p>Test-score version: Quiz 20% (88), Project 30% (92), Midterm 20% (78), Final 30% (85). Weighted mean = 0.20(88) + 0.30(92) + 0.20(78) + 0.30(85) = 17.6 + 27.6 + 15.6 + 25.5 = 86.3.</p>
<h4>Example 4-3. Sample variance and standard deviation</h4>
<p><strong>Problem:</strong> Find the sample variance and standard deviation of 4, 8, 6, 5, 3.</p>
<div class="sol"><p><strong>Step 1.</strong> Mean = <span class="mth"><span class="fr"><span class="n">4 + 8 + 6 + 5 + 3</span><span class="d">5</span></span> = <span class="fr"><span class="n">26</span><span class="d">5</span></span> = 5.2</span></p></div>
<table>
<thead>
<tr>
<th><strong>x</strong></th>
<th><strong>x − x̄</strong></th>
<th><strong>(x − x̄)²</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>4</td>
<td>−1.2</td>
<td>1.44</td>
</tr>
<tr>
<td>8</td>
<td>2.8</td>
<td>7.84</td>
</tr>
<tr>
<td>6</td>
<td>0.8</td>
<td>0.64</td>
</tr>
<tr>
<td>5</td>
<td>−0.2</td>
<td>0.04</td>
</tr>
<tr>
<td>3</td>
<td>−2.2</td>
<td>4.84</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td>0</td>
<td><strong>14.80</strong></td>
</tr>
</tbody>
</table>
<div class="sol"><p><strong>Step 2.</strong> Sample variance <span class="mth">s<sup>2</sup> = <span class="fr"><span class="n">14.8</span><span class="d">5 - 1</span></span> = 3.7</span></p>
<p><strong>Step 3.</strong> Standard deviation <span class="mth">s = √<span class="sq">3.7</span> ≈ 1.92</span></p></div>
<p>If these five values were the entire population, divide by N = 5 instead: <span class="mth">σ<sup>2</sup> = <span class="fr"><span class="n">14.8</span><span class="d">5</span></span> = 2.96</span> and <span class="mth">σ = √<span class="sq">2.96</span> ≈ 1.72</span>. Always check whether the question says sample or population.</p>
<h4>Example 4-4. Quartiles, IQR, and outliers</h4>
<p><strong>Problem:</strong> Find the five-number summary of 5, 7, 8, 9, 10, 12, 13, 15, 40 and test for outliers.</p>
<div class="sol"><p>n = 9, so the median is the 5th value: <strong>Q2 = 10</strong>.</p>
<p>Lower half (left of the median): 5, 7, 8, 9, so Q1 = (7 + 8) ÷ 2 = <strong>7.5</strong>.</p>
<p>Upper half: 12, 13, 15, 40, so Q3 = (13 + 15) ÷ 2 = <strong>14</strong>.</p>
<p>Min = 5, Max = 40. <strong>IQR</strong> = 14 − 7.5 = 6.5.</p>
<p>Lower fence = 7.5 − 1.5(6.5) = −2.25. Upper fence = 14 + 1.5(6.5) = 23.75.</p>
<p><strong>Answer: 40 is above 23.75, so it is a possible outlier.</strong></p></div>
<p>This uses the "median of each half, leaving out the median" rule. Other rules give slightly different quartiles, so follow your instructor's method.</p>
<h4>Example 4-5. Compare scores using z-scores</h4>
<p><strong>Problem:</strong> Ben scored 82 in Math (mean 70, SD 8) and 76 in English (mean 65, SD 5). In which subject did he do better relative to the class?</p>
<div class="sol"><p>Math: <span class="mth">z = <span class="fr"><span class="n">82 − 70</span><span class="d">8</span></span> = 1.5</span></p>
<p>English: <span class="mth">z = <span class="fr"><span class="n">76 − 65</span><span class="d">5</span></span> = 2.2</span></p>
<p><strong>Answer: English. 2.2 SDs above the mean beats 1.5 SDs above the mean.</strong></p></div>
<h4>Example 4-6. Basic probability rules</h4>
<p><strong>Problem 1:</strong> A bag has 5 red, 3 blue, and 2 green marbles. Find P(red), P(not blue), and P(red or green).</p>
<div class="sol"><p>Total = 10. P(red) = 5/10 = 1/2. P(not blue) = 1 − 3/10 = 7/10. P(red or green) = 5/10 + 2/10 = 7/10 (the events cannot happen together).</p></div>
<p><strong>Problem 2:</strong> One card is drawn from a standard 52-card deck. Find P(heart or king).</p>
<div class="sol"><p>P(heart) = 13/52, P(king) = 4/52, P(heart and king) = 1/52 (the king of hearts).</p>
<p>P(heart or king) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13.</p></div>
<p><strong>Problem 3:</strong> A marble is drawn from the bag, put back, and a second marble is drawn. Find P(red, then blue). Draws with replacement are independent: P = (5/10)(3/10) = 15/100 = 0.15.</p>
<h4>Example 4-7. Bayes' theorem</h4>
<p><strong>Problem:</strong> Machine A makes 60% of a factory's items and Machine B makes 40%. 2% of A's items and 5% of B's items are defective. An item is found defective. What is the probability it came from Machine B?</p>
<div class="sol"><p>Use 1,000 items. Machine A: 600 items, 2% defective = 12. Machine B: 400 items, 5% defective = 20.</p>
<p>Total defective = 12 + 20 = 32. Of these, 20 came from B.</p>
<p><span class="mth">P(B | defective) = <span class="fr"><span class="n">20</span><span class="d">32</span></span> = 0.625</span></p></div>
<p>With the formula: P(D) = 0.6(0.02) + 0.4(0.05) = 0.032, and <span class="mth">P(B | D) = <span class="fr"><span class="n">0.05 × 0.4</span><span class="d">0.032</span></span> = <span class="fr"><span class="n">0.02</span><span class="d">0.032</span></span> = 0.625</span>.</p>
<div class="sol"><p><strong>Answer: 62.5%</strong></p></div>
<h4>Example 4-8. Expected value</h4>
<p><strong>Problem 1:</strong> X takes the values 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2. Find E(X).</p>
<div class="sol"><p>Check: 0.1 + 0.3 + 0.4 + 0.2 = 1. ✓</p>
<p>E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7.</p></div>
<p><strong>Problem 2:</strong> A raffle sells 1,000 tickets at ₱50 each. One ticket wins ₱10,000. What is the expected net value of one ticket?</p>
<div class="sol"><p>Win: net 10,000 − 50 = 9,950 with probability 0.001. Lose: net −50 with probability 0.999.</p>
<p>E = 9,950(0.001) + (−50)(0.999) = 9.95 − 49.95 = −₱40. On average, each ticket loses ₱40 for the buyer.</p></div>
<h4>Example 4-9. Normal distribution and the empirical rule</h4>
<p><strong>Problem:</strong> Heights are approximately normal with mean 160 cm and SD 8 cm.</p>
<div class="sol"><p><strong>(a)</strong> Between 144 and 176 cm: these are 2 SDs below and above the mean, so about 95%.</p>
<p><strong>(b)</strong> Above 176 cm: the remaining 5% is split between both tails, so about 2.5%.</p>
<p><strong>(c)</strong> Between 152 and 168 cm: within 1 SD, so about 68%.</p>
<p><strong>(d)</strong> Below 172 cm: <span class="mth">z = <span class="fr"><span class="n">172 − 160</span><span class="d">8</span></span> = 1.5</span>. A z-table gives an area of 0.9332 to the left, so about 93.3% are shorter than 172 cm.</p></div>
<h4>Example 4-10. Binomial probability</h4>
<p><strong>Problem:</strong> A quiz has 5 multiple-choice questions with 4 choices each. A student guesses every answer. Find P(exactly 2 correct) and P(at least 1 correct).</p>
<div class="sol"><p>n = 5, p = 0.25, 1 − p = 0.75.</p>
<p><span class="mth">&lt;em&gt;P&lt;/em&gt;(&lt;em&gt;X&lt;/em&gt; = 2) = &lt;em&gt;C&lt;/em&gt;(5,2) (0.25)&lt;sup&gt;2&lt;/sup&gt; (0.75)&lt;sup&gt;3&lt;/sup&gt; = 10 × 0.0625 × 0.421875 ≈ 0.2637</span></p>
<p><span class="mth">&lt;em&gt;P&lt;/em&gt;(&lt;em&gt;a&lt;/em&gt;&lt;em&gt;t&lt;/em&gt; &lt;em&gt;l&lt;/em&gt;&lt;em&gt;e&lt;/em&gt;&lt;em&gt;a&lt;/em&gt;&lt;em&gt;s&lt;/em&gt;&lt;em&gt;t&lt;/em&gt; 1) = 1 − &lt;em&gt;P&lt;/em&gt;(0) = 1 − (0.75)&lt;sup&gt;5&lt;/sup&gt; = 1 − 0.2373 = 0.7627</span></p>
<p>Mean = np = 5(0.25) = 1.25 correct answers.</p></div>
<h4>Example 4-11. Correlation and regression</h4>
<p><strong>Problem:</strong> Hours studied (x) and test scores (y) for five students: (1, 55), (2, 60), (3, 70), (4, 72), (5, 83). Find the regression line, r, and predict the score for 6 hours.</p>
<div class="sol"><p>x̄ = 3 and ȳ = 68. Σ(x − x̄)(y − ȳ) = 26 + 8 + 0 + 4 + 30 = 68. Σ(x − x̄)² = 10. Σ(y − ȳ)² = 478.</p>
<p>Slope <span class="mth">b = <span class="fr"><span class="n">68</span><span class="d">10</span></span> = 6.8</span>. Intercept <span class="mth">&lt;em&gt;a&lt;/em&gt; = 68 − 6.8(3) = 47.6</span>.</p>
<p><strong>ŷ = 47.6 + 6.8x</strong></p>
<p><span class="mth">r = <span class="fr"><span class="n">68</span><span class="d">√<span class="sq">10 × 478</span></span></span> = <span class="fr"><span class="n">68</span><span class="d">69.14</span></span> ≈ 0.98</span>, a strong positive linear relationship.</p>
<p>Prediction: x = 6 gives ŷ = 47.6 + 6.8(6) = 88.4.</p></div>
<p>In Excel: =CORREL(x-range, y-range) gives r. Do not extend predictions far beyond the data range, and remember correlation does not prove causation.</p>
<h4>Example 4-12. Sample size for a proportion</h4>
<p><strong>Problem:</strong> How many respondents are needed to estimate a proportion with a 95% confidence level (z = 1.96) and margin of error 5%, if p is unknown?</p>
<div class="sol"><p>Use p = 0.5: <span class="mth">n<sub>0</sub> = <span class="fr"><span class="n">z<sup>2</sup> p(1 − p)</span><span class="d">E<sup>2</sup></span></span> = <span class="fr"><span class="n">(1.96)<sup>2</sup>(0.5)(0.5)</span><span class="d">(0.05)<sup>2</sup></span></span> = <span class="fr"><span class="n">3.8416 × 0.25</span><span class="d">0.0025</span></span> = 384.16</span></p>
<p><strong>Answer: round up to 385 respondents</strong></p></div>
<p>Always round sample size up. With E = 3%, n₀ = 1,067.1, so use 1,068.</p>
<h3>Practice Problems (Module 4)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 4-1.</strong> Find the mean, median, mode, and range of 6, 9, 9, 12, 14, 15, 21.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Mean ≈ 12.29, median = 12, mode = 9, range = 15.</strong> Sum = 86, and 86 ÷ 7 ≈ 12.29. The median is the 4th value. Range = 21 − 6.</div></details>
<p><strong>Problem 4-2.</strong> Find the mean and median of 18, 22, 25, 27, 30, 34.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Mean = 26, median = 26.</strong> Sum = 156 and 156 ÷ 6 = 26. Median = (25 + 27) ÷ 2 = 26.</div></details>
<p><strong>Problem 4-3.</strong> Find the weighted mean: Exam 40% (84), Lab 25% (90), Quiz 15% (76), Project 20% (88).</p>
<details><summary>Show answer</summary><div class="warn"><strong>85.1.</strong> 0.40(84) + 0.25(90) + 0.15(76) + 0.20(88) = 33.6 + 22.5 + 11.4 + 17.6 = 85.1.</div></details>
<p><strong>Problem 4-4.</strong> Find the weighted average grade: 3 units with 1.25, 3 units with 2.00, 2 units with 1.50, 1 unit with 1.00.</p>
<details><summary>Show answer</summary><div class="warn"><strong>≈ 1.53.</strong> Σwx = 3.75 + 6 + 3 + 1 = 13.75. Σw = 9. 13.75 ÷ 9 ≈ 1.528.</div></details>
<p><strong>Problem 4-5.</strong> Find the sample variance and sample standard deviation of 3, 5, 7, 9, 11. Then find the population versions.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Sample: s² = 10, s ≈ 3.16. Population: σ² = 8, σ ≈ 2.83.</strong> Mean = 7. Squared deviations: 16, 4, 0, 4, 16 (sum 40). Sample: 40 ÷ 4 = 10. Population: 40 ÷ 5 = 8.</div></details>
<p><strong>Problem 4-6.</strong> Find the five-number summary of 3, 6, 7, 8, 9, 10, 12, 14, 15, 41, the IQR, and any outliers.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Min 3, Q1 7, median 9.5, Q3 14, max 41; IQR = 7.</strong> Fences: 7 − 10.5 = −3.5 and 14 + 10.5 = 24.5. The value <strong>41 is an outlier</strong>. (Halves: 3, 6, 7, 8, 9 and 10, 12, 14, 15, 41.)</div></details>
<p><strong>Problem 4-7.</strong> A test has mean 50 and SD 4. Find z for x = 58 and x = 44. What score has z = 1.25?</p>
<details><summary>Show answer</summary><div class="warn"><strong>z = 2 for 58; z = −1.5 for 44; score = 55.</strong> For z = 1.25: x = 50 + 1.25(4) = 55.</div></details>
<p><strong>Problem 4-8.</strong> A student scored 88 on Test A (mean 80, SD 4) and 90 on Test B (mean 82, SD 8). On which test did the student do better relative to the class?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Test A.</strong> z = (88 − 80) ÷ 4 = 2 on Test A, and z = (90 − 82) ÷ 8 = 1 on Test B.</div></details>
<p><strong>Problem 4-9.</strong> A fair die is rolled. Find P(prime number), P(not 6), and P(even or greater than 4). Then, for two fair dice, find P(sum = 7).</p>
<details><summary>Show answer</summary><div class="warn"><strong>1/2, 5/6, 2/3, and 1/6.</strong> Primes: 2, 3, 5 (3/6). Not 6: 1 − 1/6. Even or &gt; 4 is {2, 4, 5, 6}, so 4/6. Sum 7 has 6 ways out of 36: 6/36 = 1/6.</div></details>
<p><strong>Problem 4-10.</strong> One card is drawn from a standard deck. Find P(face card or heart).</p>
<details><summary>Show answer</summary><div class="warn"><strong>11/26.</strong> Face cards: 12. Hearts: 13. Face cards that are hearts: 3. P = (12 + 13 − 3)/52 = 22/52 = 11/26.</div></details>
<p><strong>Problem 4-11.</strong> A fair coin is flipped three times. Find P(all heads) and P(at least one tail).</p>
<details><summary>Show answer</summary><div class="warn"><strong>1/8 and 7/8.</strong> P(all heads) = (1/2)³ = 1/8. At least one tail is the complement: 1 − 1/8 = 7/8.</div></details>
<p><strong>Problem 4-12.</strong> A disease affects 2% of a population. A test is positive for 95% of sick people and gives a false positive for 4% of healthy people. Use 10,000 people to find P(sick | positive).</p>
<details><summary>Show answer</summary><div class="warn"><strong>≈ 32.65%.</strong> Sick: 200, of whom 190 test positive. Healthy: 9,800, of whom 392 test positive. Total positive = 582. P = 190 ÷ 582 ≈ 0.3265.</div></details>
<p><strong>Problem 4-13.</strong> X takes the values 1, 2, 3, 4, 5 with probabilities 0.1, 0.2, 0.3, 0.3, 0.1. Check that this is a distribution and find E(X).</p>
<details><summary>Show answer</summary><div class="warn"><strong>It is valid (probabilities sum to 1); E(X) = 3.1.</strong> 0.1 + 0.4 + 0.9 + 1.2 + 0.5 = 3.1.</div></details>
<p><strong>Problem 4-14.</strong> Scores are approximately normal with mean 100 and SD 15. Estimate the percent between 85 and 115, the percent above 130, and the z-score of 120.</p>
<details><summary>Show answer</summary><div class="warn"><strong>About 68%, about 2.5%, and z ≈ 1.33.</strong> 85 and 115 are 1 SD from the mean. 130 is 2 SDs above, leaving about 2.5% in the upper tail. z = (120 − 100) ÷ 15 = 1.33.</div></details>
<p><strong>Problem 4-15.</strong> (a) A fair coin is flipped 6 times. Find P(exactly 4 heads). (b) A player makes 70% of free throws and takes 4 shots. Find P(exactly 3 made) and the mean number made.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 15/64 ≈ 0.2344. (b) 0.4116; mean 2.8.</strong> (a) C(6,4)(1/2)⁶ = 15/64. (b) C(4,3)(0.7)³(0.3) = 4 × 0.343 × 0.3 = 0.4116. Mean = 4(0.7) = 2.8.</div></details>
<p><strong>Problem 4-16.</strong> (a) A regression line is ŷ = 8 + 2.5x. Predict y for x = 10 and interpret the slope. (b) Interpret r = −0.92.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) ŷ = 33. Each 1-unit increase in x predicts a 2.5-unit increase in y.</strong> (b) A strong negative linear relationship: as one variable increases, the other tends to decrease. It does not prove causation.</div></details>
<p><strong>Problem 4-17.</strong> Data: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5). Find the regression line and r.</p>
<details><summary>Show answer</summary><div class="warn"><strong>ŷ = 2.2 + 0.6x; r ≈ 0.77.</strong> x̄ = 3, ȳ = 4. Σ(x − x̄)(y − ȳ) = 6, Σ(x − x̄)² = 10, Σ(y − ȳ)² = 6. b = 6 ÷ 10 = 0.6, a = 4 − 0.6(3) = 2.2, r = 6 ÷ √60 ≈ 0.7746.</div></details>
<p><strong>Problem 4-18.</strong> Name the sampling method: (a) every 10th name from a list after a random start; (b) 30 students chosen from each year level; (c) 4 classrooms randomly chosen and all their students surveyed; (d) the first 50 people who walk by.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Systematic. (b) Stratified. (c) Cluster. (d) Convenience</strong> (likely biased).</div></details>
<p><strong>Problem 4-19.</strong> Find the sample size needed for a 95% confidence level (z = 1.96), margin of error 4%, and unknown proportion.</p>
<details><summary>Show answer</summary><div class="warn"><strong>601.</strong> n₀ = 3.8416 × 0.25 ÷ 0.0016 = 600.25, and always round up.</div></details>`},
{ic:"🕸️",n:"The Mathematics of Graphs",
sub:"Vertices and edges, Euler and Hamilton routes, travelling salesperson methods, planarity and graph coloring.",
tip:"Euler is about edges, Hamilton is about vertices. Count odd-degree vertices, and use V − E + F = 2 for connected planar graphs.",
r:`<h2>The Mathematics of Graphs</h2>
<h3>5.1 Graph basics</h3>
<p>A graph is a collection of vertices and edges. A vertex is a point or node. An edge connects two vertices. Graphs model roads, computer networks, friendships, and schedules.</p>
<p>The degree of a vertex is the number of edges touching it. A loop contributes two to the degree in an undirected graph.</p>
<h3>5.2 Konigsberg Bridge Problem</h3>
<p>The classic problem asks whether a person can cross every bridge exactly once. Euler represented land areas as vertices and bridges as edges. The problem helped establish graph theory.</p>
<h3>5.3 Euler paths and circuits</h3>
<p>An Euler path uses every edge exactly once. An Euler circuit uses every edge exactly once and returns to the starting vertex.</p>
<ul>
<li><p>For a connected undirected graph, an Euler circuit exists if every vertex has even degree.</p></li>
<li><p>For a connected undirected graph, an open Euler path exists if exactly two vertices have odd degree.</p></li>
<li><p>If more than two vertices have odd degree, neither an Euler path nor an Euler circuit exists.</p></li>
<li><p>Ignore isolated vertices when considering the connected part that contains edges.</p></li>
</ul>
<div class="warn"><b>Example:</b> If the vertex degrees are 2, 2, 4, 2, all degrees are even, so a connected graph has an Euler circuit.</div>
<h3>5.4 Hamilton paths and circuits</h3>
<p>A Hamilton path visits every vertex exactly once. A Hamilton circuit visits every vertex exactly once and returns to the starting vertex. Unlike Euler problems, Hamilton problems focus on vertices rather than edges.</p>
<h3>5.5 Weighted graphs and travelling salesperson methods</h3>
<p>A weighted graph assigns a cost, distance, or time to each edge. The travelling salesperson problem asks for a low-cost circuit that visits each required location once and returns to the start.</p>
<h4>Brute force algorithm</h4>
<p>List every possible route, calculate each total weight, then choose the smallest. This method checks all routes but becomes slow as the number of vertices grows.</p>
<h4>Nearest neighbor or greedy algorithm</h4>
<ol start="5" type="1">
<li><p>Choose a starting vertex.</p></li>
<li><p>Travel to the nearest unvisited vertex.</p></li>
<li><p>Repeat until every vertex has been visited.</p></li>
<li><p>Return to the starting vertex and calculate the total weight.</p></li>
</ol>
<p>The nearest-neighbor route is a quick heuristic. It does not always produce the shortest possible circuit.</p>
<h4>Repeated nearest neighbor algorithm</h4>
<p>Run the nearest-neighbor method from each possible starting vertex. Compare the total route weights and choose the lowest route found. This improves the chance of finding a good route but does not guarantee the global minimum.</p>
<h4>Cheapest link or sorted edges algorithm</h4>
<ol start="9" type="1">
<li><p>List edges from lowest weight to highest weight.</p></li>
<li><p>Select the cheapest available edge unless it gives a vertex degree greater than 2 or forms a smaller circuit before all vertices are included.</p></li>
<li><p>Continue until each vertex has degree 2 and the selected edges form one circuit containing all vertices.</p></li>
</ol>
<p>Always show the selected edges and add their weights. Check the full route at the end.</p>
<h3>5.6 Planarity and Euler's formula</h3>
<p>A planar graph is a graph drawn on a plane without edge crossings, except at shared vertices. A graph that appears crossed might still be planar if redrawn without crossings.</p>
<code>For a connected planar graph: V − E + F = 2</code>
<p>V is the number of vertices, E is the number of edges, and F is the number of faces, including the outside region.</p>
<div class="warn"><b>Example:</b> A connected planar graph has V = 6 and E = 9. Then F = 2 − V + E = 2 − 6 + 9 = 5.</div>
<h3>5.7 Graph coloring</h3>
<p>A proper vertex coloring gives different colors to vertices joined by an edge. The chromatic number is the smallest number of colors needed.</p>
<p>The Four Color Theorem says every planar map can be colored with no more than four colors so neighbouring regions have different colors.</p>
<p>A graph is 2-colorable exactly when it is bipartite. Equivalently, it has no odd cycle. A triangle is not 2-colorable because each vertex touches the other two.</p>
<h3>Quick review</h3>
<ul>
<li><p>Euler focuses on edges. Hamilton focuses on vertices.</p></li>
<li><p>An Euler circuit needs every degree even in a connected graph.</p></li>
<li><p>An Euler path needs exactly zero or two odd-degree vertices, with the zero case giving a circuit.</p></li>
<li><p>Euler's planar formula is V − E + F = 2 for a connected planar graph.</p></li>
<li><p>The chromatic number is the minimum number of colours needed for a proper coloring.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 5)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 5-1. Euler path or circuit?</h4>
<p><strong>Problem:</strong> A connected graph has vertices A, B, C, D and edges AB, AC, BC, BD, CD. Does it have an Euler path or circuit?</p>
<div class="sol"><p><strong>Step 1. Degrees:</strong> A = 2 (AB, AC). B = 3 (AB, BC, BD). C = 3 (AC, BC, CD). D = 2 (BD, CD).</p>
<p><strong>Check:</strong> the degrees add to 2 + 3 + 3 + 2 = 10 = 2 × 5 edges. (The sum of the degrees is always twice the number of edges.)</p>
<p><strong>Step 2.</strong> Exactly two vertices (B and C) have odd degree, so an Euler path exists but an Euler circuit does not.</p>
<p><strong>Step 3.</strong> The path must start at one odd vertex and end at the other. Example: B → A → C → B → D → C. Every edge is used exactly once.</p></div>
<h4>Example 5-2. Euler's formula for planar graphs</h4>
<div class="sol"><p>A connected planar graph has V = 7 and E = 10. Then <span class="mth">&lt;em&gt;F&lt;/em&gt; = 2 − &lt;em&gt;V&lt;/em&gt; + &lt;em&gt;E&lt;/em&gt; = 2 − 7 + 10 = 5</span> faces.</p>
<p>A cube has V = 8 and E = 12, so F = 2 − 8 + 12 = <strong>6</strong>. A cube does have 6 faces. ✓</p>
<p>If V = 5 and F = 6, then E = V + F − 2 = 5 + 6 − 2 = <strong>9</strong>.</p></div>
<h4>Example 5-3. Brute force, nearest neighbor, repeated nearest neighbor, and cheapest link</h4>
<p><strong>Problem:</strong> Four towns are joined by roads with these distances (km): AB = 10, AC = 8, AD = 3, BC = 6, BD = 2, CD = 1. Find a low-cost circuit starting and ending at A.</p>
<p><strong>Brute force.</strong> With A fixed as the start, there are 3! = 6 routes (3 different circuits, since each reversed route has the same total).</p>
<table>
<thead>
<tr>
<th><strong>Route</strong></th>
<th><strong>Edges added</strong></th>
<th><strong>Total</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>A–B–C–D–A</td>
<td>10 + 6 + 1 + 3</td>
<td>20</td>
</tr>
<tr>
<td>A–B–D–C–A</td>
<td>10 + 2 + 1 + 8</td>
<td>21</td>
</tr>
<tr>
<td>A–C–B–D–A</td>
<td>8 + 6 + 2 + 3</td>
<td><strong>19</strong></td>
</tr>
</tbody>
</table>
<div class="sol"><p>The cheapest circuit is A–C–B–D–A with total <strong>19 km</strong>. The reverse routes repeat these totals.</p></div>
<p><strong>Nearest neighbor from A.</strong></p>
<div class="sol"><p>From A, the nearest town is D (3). From D, the nearest unvisited town is C (1). From C, the only unvisited town is B (6). Return B to A (10).</p>
<p>Route A–D–C–B–A, total = 3 + 1 + 6 + 10 = <strong>20 km</strong>. This is not the best circuit.</p></div>
<p><strong>Repeated nearest neighbor.</strong> Run nearest neighbor from every start.</p>
<table>
<thead>
<tr>
<th><strong>Start</strong></th>
<th><strong>Route</strong></th>
<th><strong>Total</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>A–D–C–B–A</td>
<td>20</td>
</tr>
<tr>
<td>B</td>
<td>B–D–C–A–B</td>
<td>21</td>
</tr>
<tr>
<td>C</td>
<td>C–D–B–A–C</td>
<td>21</td>
</tr>
<tr>
<td>D</td>
<td>D–C–B–A–D</td>
<td>20</td>
</tr>
</tbody>
</table>
<div class="sol"><p>The best result is 20 km. Even repeated nearest neighbor missed the true minimum of 19.</p></div>
<p><strong>Cheapest link.</strong> List the edges from lowest to highest: CD 1, BD 2, AD 3, BC 6, AC 8, AB 10.</p>
<div class="sol"><p>Take CD (1). Take BD (2). Skip AD (3): D would have degree 3. Skip BC (6): B–C–D would close a circuit without A. Take AC (8). Take AB (10) to finish.</p>
<p>Circuit A–C–D–B–A, total = 8 + 1 + 2 + 10 = <strong>21 km</strong>.</p>
<p><strong>Summary: best = 19 (brute force); nearest neighbor = 20; cheapest link = 21</strong></p></div>
<p>Extra note: a complete graph with n vertices has (n − 1)! routes from a fixed start, so brute force quickly becomes too long. That is why heuristics are used.</p>
<h4>Example 5-4. Graph coloring</h4>
<p><strong>Problem:</strong> Regions P, Q, R, S, T share borders as follows: P–Q, P–R, Q–R, R–S, S–T. Find the chromatic number and a valid coloring.</p>
<div class="sol"><p>P, Q, R are all mutually adjacent (a triangle), so they need 3 different colors. The chromatic number is at least 3.</p>
<p>Color P = 1, Q = 2, R = 3. S touches only R, so S = 1. T touches only S, so T = 2.</p>
<p><strong>Answer: chromatic number = 3 (3 colors are enough and needed).</strong></p></div>
<h3>Practice Problems (Module 5)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 5-1.</strong> Decide whether each graph has an Euler path, an Euler circuit, or neither: (a) K₅ (5 vertices, all joined); (b) K₄; (c) a 6-cycle; (d) a path of 4 vertices in a line.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Euler circuit</strong> (all degrees 4). <strong>(b) Neither</strong> (all four degrees are 3, so four odd vertices). <strong>(c) Euler circuit</strong> (all degrees 2). <strong>(d) Euler path only</strong> (degrees 1, 2, 2, 1, so two odd vertices).</div></details>
<p><strong>Problem 5-2.</strong> A connected graph has edges AB, BC, CD, DA, AC. Find each degree and decide about an Euler path or circuit. Give a path if one exists.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Degrees: A = 3, B = 2, C = 3, D = 2; Euler path only.</strong> Two odd vertices (A and C). Example: A → B → C → D → A → C.</div></details>
<p><strong>Problem 5-3.</strong> In the Königsberg problem the land areas have degrees 3, 3, 3, and 5. Explain why no walk crosses every bridge exactly once. How many bridges are there?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Four vertices have odd degree, so there is no Euler path or circuit.</strong> Number of bridges = (3 + 3 + 3 + 5) ÷ 2 = 7.</div></details>
<p><strong>Problem 5-4.</strong> Find the missing value using V − E + F = 2: (a) V = 10, E = 15; (b) V = 6, F = 8; (c) E = 18, F = 10.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) F = 7. (b) E = 12. (c) V = 10.</strong> (a) F = 2 − 10 + 15 = 7. (b) E = V + F − 2 = 12. (c) V = 2 − F + E = 2 − 10 + 18 = 10.</div></details>
<p><strong>Problem 5-5.</strong> A graph has vertex degrees 3, 3, 2, 2, 2. How many edges does it have?</p>
<details><summary>Show answer</summary><div class="warn"><strong>6 edges.</strong> The degrees sum to 12 and the sum equals 2E, so E = 6.</div></details>
<p><strong>Problem 5-6.</strong> Distances between five towns (km): AB = 21, AC = 2, AD = 18, AE = 4, BC = 3, BD = 25, BE = 8, CD = 9, CE = 29, DE = 28. Use nearest neighbor starting at A.</p>
<details><summary>Show answer</summary><div class="warn"><strong>A–C–B–E–D–A, total 59 km.</strong> A to C (2), C to B (3), B to E (8, since A is visited and D = 25), E to D (28), D back to A (18). Sum = 2 + 3 + 8 + 28 + 18 = 59.</div></details>
<p><strong>Problem 5-7.</strong> For the same five towns, use cheapest link.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Circuit E–A–C–B–D–E, total 62 km.</strong> Order: AC 2 (take), BC 3 (take), AE 4 (take), BE 8 (skip: closes a circuit without D), CD 9 (skip: C would have degree 3), AD 18 (skip: A would have degree 3), AB 21 (skip: degree), BD 25 (take), DE 28 (take). Total = 2 + 3 + 4 + 25 + 28 = 62.</div></details>
<p><strong>Problem 5-8.</strong> A complete graph has 6 vertices. How many routes does brute force check from a fixed starting vertex? How many different circuits are there if a route and its reverse count as the same circuit?</p>
<details><summary>Show answer</summary><div class="warn"><strong>120 routes and 60 circuits.</strong> (6 − 1)! = 120, and 120 ÷ 2 = 60.</div></details>
<p><strong>Problem 5-9.</strong> Find the chromatic number of: (a) a triangle with one extra vertex attached to one corner; (b) a 5-cycle; (c) a 6-cycle; (d) K₄.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 3. (b) 3</strong> (odd cycle). <strong>(c) 2</strong> (even cycle, bipartite). <strong>(d) 4</strong> (every vertex touches the other three).</div></details>`},
{ic:"📈",n:"Linear Programming",
sub:"Build a model, graph the constraints, find corner points, and meet the simplex method.",
tip:"Include x ≥ 0 and y ≥ 0, shade the correct side, test every corner point, and report the variables as well as the best value.",
r:`<h2>Linear Programming</h2>
<h3>6.1 Main idea</h3>
<p>Linear programming finds the best value of a linear objective, such as maximum profit or minimum cost, while obeying linear restrictions called constraints.</p>
<p>A standard model includes decision variables, an objective function, and constraints.</p>
<h3>6.2 Linear inequalities</h3>
<p>A linear inequality uses &lt;, &gt;, ≤, or ≥. For example, 2x + y ≤ 8 describes all points whose coordinates satisfy the rule.</p>
<p>To graph an inequality, first graph the boundary line. Use a solid line for ≤ or ≥ because the boundary is included. Use a dashed line for &lt; or &gt; because the boundary is excluded. Test a point such as (0,0) unless the boundary passes through it.</p>
<div class="warn"><b>Example:</b> y ≤ 6 − 2x. Draw y = 6 − 2x as a solid line, then shade the side containing a test point that satisfies the inequality.</div>
<h3>6.3 Graphical method</h3>
<ol start="12" type="1">
<li><p>Define decision variables.</p></li>
<li><p>Write the objective function to maximize or minimize.</p></li>
<li><p>Write each constraint and include non-negativity restrictions when needed.</p></li>
<li><p>Graph each boundary line and shade the feasible side.</p></li>
<li><p>Identify the feasible region, the area satisfying every constraint.</p></li>
<li><p>Find the corner points of the feasible region.</p></li>
<li><p>Substitute each corner point into the objective function.</p></li>
<li><p>Choose the corner point with the best objective value.</p></li>
</ol>
<div class="warn"><b>Worked example:</b> Maximize Z = 3x + 2y subject to x + y ≤ 4, x ≤ 2, x ≥ 0, y ≥ 0. The feasible corner points are (0,0), (2,0), (2,2), and (0,4). Objective values are 0, 6, 10, and 8. The maximum is Z = 10 at (2,2).</div>
<h3>6.4 Simplex method</h3>
<p>The simplex method solves linear programming problems by moving from one corner point of the feasible region to another while improving the objective value. A simplex tableau organizes coefficients and calculations.</p>
<p>For a maximization problem with ≤ constraints, add slack variables to turn inequalities into equations. Example: x + y ≤ 4 becomes x + y + s₁ = 4, where s₁ ≥ 0.</p>
<p>The exact entering-variable, leaving-variable, and pivot rules depend on the tableau convention taught in class. Keep the same sign convention throughout. After each pivot, check feasibility and the objective row. Stop when the optimality condition for your convention is met.</p>
<h3>Common mistakes</h3>
<ul>
<li><p>Forgetting x ≥ 0 or y ≥ 0.</p></li>
<li><p>Shading the wrong side of an inequality.</p></li>
<li><p>Checking only one corner point instead of every feasible corner point.</p></li>
<li><p>Mixing the objective row sign rules from different simplex conventions.</p></li>
<li><p>Reporting the maximum value without stating the values of the decision variables.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 6)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 6-1. Graph a linear inequality</h4>
<p><strong>Problem:</strong> Graph 2x + y ≤ 8 with x ≥ 0 and y ≥ 0.</p>
<div class="sol"><p><strong>Step 1.</strong> Boundary line 2x + y = 8: x-intercept (4, 0) and y-intercept (0, 8).</p>
<p><strong>Step 2.</strong> Because of "≤", draw a solid line.</p>
<p><strong>Step 3.</strong> Test (0, 0): 2(0) + 0 = 0 ≤ 8 is true, so shade the side that contains the origin.</p>
<p><strong>Step 4.</strong> With x ≥ 0 and y ≥ 0, the region is the triangle with corners (0, 0), (4, 0), and (0, 8).</p></div>
<h4>Example 6-2. Maximization word problem (graphical method)</h4>
<p><strong>Problem:</strong> A bakery makes x cakes and y pies. Each cake earns ₱40 profit and each pie earns ₱30. The bakery can make at most 10 items in total, and the oven time allows 2x + y ≤ 16. How many of each should be made for the greatest profit?</p>
<div class="sol"><p><strong>Variables:</strong> x = cakes, y = pies.</p>
<p><strong>Objective:</strong> Maximize P = 40x + 30y.</p>
<p><strong>Constraints:</strong> x + y ≤ 10; 2x + y ≤ 16; x ≥ 0; y ≥ 0.</p>
<p><strong>Corner points.</strong> Axes: (0, 0). On the x-axis, 2x = 16 gives (8, 0). On the y-axis, y = 10 gives (0, 10). Intersection of x + y = 10 and 2x + y = 16: subtract the first equation from the second to get x = 6, then y = 4, so (6, 4).</p>
<p>Check each corner is feasible: (8, 0): 8 + 0 = 8 ≤ 10 ✓. (0, 10): 2(0) + 10 = 10 ≤ 16 ✓.</p></div>
<table>
<thead>
<tr>
<th><strong>Corner</strong></th>
<th><strong>P = 40x + 30y</strong></th>
<th><strong>Value</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(0, 0)</td>
<td>40(0) + 30(0)</td>
<td>0</td>
</tr>
<tr>
<td>(8, 0)</td>
<td>40(8) + 30(0)</td>
<td>320</td>
</tr>
<tr>
<td>(6, 4)</td>
<td>40(6) + 30(4)</td>
<td><strong>360</strong></td>
</tr>
<tr>
<td>(0, 10)</td>
<td>40(0) + 30(10)</td>
<td>300</td>
</tr>
</tbody>
</table>
<div class="sol"><p><strong>Answer: make 6 cakes and 4 pies for a maximum profit of ₱360.</strong></p></div>
<h4>Example 6-3. Minimization word problem</h4>
<p><strong>Problem:</strong> Minimize the cost C = 4x + 6y subject to 2x + y ≥ 10, x + 3y ≥ 15, x ≥ 0, y ≥ 0.</p>
<div class="sol"><p><strong>Corner points of the feasible region</strong> (above both lines): the y-axis point (0, 10); the x-axis point (15, 0); and the intersection of 2x + y = 10 and x + 3y = 15. From the first, y = 10 − 2x. Substitute: x + 3(10 − 2x) = 15, so −5x = −15, x = 3, y = 4. The point is (3, 4).</p></div>
<table>
<thead>
<tr>
<th><strong>Corner</strong></th>
<th><strong>C = 4x + 6y</strong></th>
<th><strong>Value</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(0, 10)</td>
<td>0 + 60</td>
<td>60</td>
</tr>
<tr>
<td>(3, 4)</td>
<td>12 + 24</td>
<td><strong>36</strong></td>
</tr>
<tr>
<td>(15, 0)</td>
<td>60 + 0</td>
<td>60</td>
</tr>
</tbody>
</table>
<div class="sol"><p><strong>Answer: minimum cost 36 at (3, 4).</strong></p></div>
<p>The region is unbounded, but a minimum exists because both cost coefficients are positive.</p>
<h4>Example 6-4. Simplex method (one full cycle of pivots)</h4>
<p><strong>Problem:</strong> Maximize Z = 3x + 2y subject to x + y ≤ 4, x ≤ 2, x ≥ 0, y ≥ 0. (Convention used here: write Z − 3x − 2y = 0, so the objective row starts with −3 and −2. Your instructor's sign convention may differ.)</p>
<div class="sol"><p><strong>Set up with slack variables:</strong> x + y + s₁ = 4 and x + s₂ = 2.</p></div>
<p><strong>Tableau 1</strong></p>
<table>
<thead>
<tr>
<th><strong>Basis</strong></th>
<th><strong>x</strong></th>
<th><strong>y</strong></th>
<th><strong>s₁</strong></th>
<th><strong>s₂</strong></th>
<th><strong>RHS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>s₁</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>4</td>
</tr>
<tr>
<td>s₂</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>Z</td>
<td>−3</td>
<td>−2</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
</tbody>
</table>
<div class="sol"><p>Most negative entry: −3, so <strong>x enters</strong>. Ratios: 4 ÷ 1 = 4 and 2 ÷ 1 = 2. Smallest is 2, so <strong>s₂ leaves</strong>. Pivot on the 1 in the s₂ row.</p>
<p>Row operations: R₁ ← R₁ − R₂ and Z-row ← Z-row + 3R₂.</p></div>
<p><strong>Tableau 2</strong></p>
<table>
<thead>
<tr>
<th><strong>Basis</strong></th>
<th><strong>x</strong></th>
<th><strong>y</strong></th>
<th><strong>s₁</strong></th>
<th><strong>s₂</strong></th>
<th><strong>RHS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>s₁</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>−1</td>
<td>2</td>
</tr>
<tr>
<td>x</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>Z</td>
<td>0</td>
<td>−2</td>
<td>0</td>
<td>3</td>
<td>6</td>
</tr>
</tbody>
</table>
<div class="sol"><p>Most negative entry: −2, so <strong>y enters</strong>. Ratios: 2 ÷ 1 = 2 for the s₁ row (the x row has 0 in the y column and is skipped). <strong>s₁ leaves</strong>. Pivot on the 1 in the s₁ row. Z-row ← Z-row + 2R₁.</p></div>
<p><strong>Tableau 3</strong></p>
<table>
<thead>
<tr>
<th><strong>Basis</strong></th>
<th><strong>x</strong></th>
<th><strong>y</strong></th>
<th><strong>s₁</strong></th>
<th><strong>s₂</strong></th>
<th><strong>RHS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>y</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>−1</td>
<td>2</td>
</tr>
<tr>
<td>x</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>Z</td>
<td>0</td>
<td>0</td>
<td>2</td>
<td>1</td>
<td>10</td>
</tr>
</tbody>
</table>
<div class="sol"><p>No negative entries remain in the Z row, so this is optimal.</p>
<p><strong>Answer: x = 2, y = 2, Z = 10. This matches the graphical method.</strong></p></div>
<h3>Practice Problems (Module 6)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 6-1.</strong> Is the point (2, 3) feasible for x + 2y ≤ 9 and 3x + y ≤ 12 (with x, y ≥ 0)? What about (4, 4)?</p>
<details><summary>Show answer</summary><div class="warn"><strong>(2, 3) is feasible; (4, 4) is not.</strong> (2, 3): 2 + 6 = 8 ≤ 9 and 6 + 3 = 9 ≤ 12. (4, 4): 4 + 8 = 12 &gt; 9, so the first constraint fails.</div></details>
<p><strong>Problem 6-2.</strong> Maximize Z = 5x + 4y subject to x + y ≤ 6, x ≤ 4, y ≤ 5, x ≥ 0, y ≥ 0.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Maximum Z = 28 at (4, 2).</strong> Corners: (0, 0) gives 0, (4, 0) gives 20, (4, 2) gives 28, (1, 5) gives 25, (0, 5) gives 20.</div></details>
<p><strong>Problem 6-3.</strong> A workshop makes tables (x) and chairs (y). Profit is ₱500 per table and ₱300 per chair. Carpentry: each table needs 4 hours and each chair 2 hours, with 40 hours available. Finishing: each item needs 1 hour, with 14 hours available. Find the production plan with the greatest profit.</p>
<details><summary>Show answer</summary><div class="warn"><strong>6 tables and 8 chairs; maximum profit ₱5,400.</strong> Constraints: 4x + 2y ≤ 40 (that is, 2x + y ≤ 20) and x + y ≤ 14. Corners: (0, 0) = 0, (10, 0) = 5,000, (6, 8) = 3,000 + 2,400 = 5,400, (0, 14) = 4,200. The point (6, 8) comes from subtracting x + y = 14 from 2x + y = 20.</div></details>
<p><strong>Problem 6-4.</strong> Minimize C = 2x + 3y subject to x + y ≥ 5, x + 3y ≥ 9, x ≥ 0, y ≥ 0.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Minimum C = 12 at (3, 2).</strong> Corners: (0, 5) gives 15, (3, 2) gives 6 + 6 = 12, (9, 0) gives 18. The point (3, 2) is where x + y = 5 meets x + 3y = 9.</div></details>
<p><strong>Problem 6-5.</strong> Write (but do not solve) a linear programming model: a student sells notebooks (x) with profit ₱40 each and planners (y) with profit ₱70 each. Each notebook needs 2 minutes of printing and each planner 5 minutes; 350 printing minutes are available. At most 100 items can be made in total.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Maximize P = 40x + 70y subject to 2x + 5y ≤ 350, x + y ≤ 100, x ≥ 0, y ≥ 0.</strong></div></details>
<p><strong>Problem 6-6.</strong> Solve the model in Problem 6-5.</p>
<details><summary>Show answer</summary><div class="warn"><strong>50 notebooks and 50 planners; maximum profit ₱5,500.</strong> Corners: (0, 0) = 0, (100, 0) = 4,000, (50, 50) = 2,000 + 3,500 = 5,500, (0, 70) = 4,900. The point (50, 50) comes from substituting y = 100 − x into 2x + 5y = 350: −3x + 500 = 350, so x = 50.</div></details>
<p><strong>Problem 6-7.</strong> Use the simplex method: Maximize Z = 4x + 3y subject to x + y ≤ 5, 2x + y ≤ 8, x, y ≥ 0.</p>
<details><summary>Show answer</summary><div class="warn"><strong>x = 3, y = 2, Z = 18.</strong> Tableau 1: s₁ row (1, 1, 1, 0 | 5), s₂ row (2, 1, 0, 1 | 8), Z row (−4, −3, 0, 0 | 0). x enters (−4); ratios 5 and 4, so s₂ leaves. After pivoting: s₁ row (0, 0.5, 1, −0.5 | 1), x row (1, 0.5, 0, 0.5 | 4), Z row (0, −1, 0, 2 | 16). y enters; ratios 2 and 8, so s₁ leaves. Final: y row (0, 1, 2, −1 | 2), x row (1, 0, −1, 1 | 3), Z row (0, 0, 2, 1 | 18). No negatives remain.</div></details>
<p><strong>Problem 6-8.</strong> Common mistake check: a student finds the corner points of a feasible region and reports only "maximum = 360." What is missing?</p>
<details><summary>Show answer</summary><div class="warn"><strong>The values of the decision variables.</strong> The answer should say where the maximum occurs, for example "maximum P = 360 at x = 6, y = 4," and should be stated in the words of the problem.</div></details>`},
{ic:"🧠",n:"Logic",
sub:"Truth values, connectives, truth tables, conditionals, De Morgan, quantifiers and valid arguments.",
tip:"Memorize the truth table, especially p → q (false only for T → F), and practice negations and the contrapositive.",
r:`<h2>Logic</h2>
<h3>7.1 Propositions and truth values</h3>
<p>A proposition is a declarative statement that is true or false. Use T for true and F for false. A compound statement combines propositions using logical connectives.</p>
<h3>7.2 Main connectives</h3>
<ul>
<li><p>Negation, ¬p: the opposite truth value of p.</p></li>
<li><p>Conjunction, p ∧ q: true only when both p and q are true.</p></li>
<li><p>Disjunction, p ∨ q: true when at least one of p or q is true. This is inclusive OR.</p></li>
<li><p>Conditional, p → q: false only when p is true and q is false.</p></li>
<li><p>Biconditional, p ↔︎ q: true when p and q have the same truth value.</p></li>
</ul>
<h3>7.3 Truth tables</h3>
<p>For n basic propositions, a full truth table has 2ⁿ rows. One proposition needs 2 rows. Two propositions need 4 rows. Three propositions need 8 rows.</p>
<p>Truth table for the main two-variable connectives:</p>
<table>
<thead>
<tr>
<th>p</th>
<th>q</th>
<th>p ∧ q</th>
<th>p ∨ q</th>
<th>p → q</th>
</tr>
</thead>
<tbody>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
</tbody>
</table>
<h3>7.4 Conditional statements</h3>
<p>For 'if p, then q', p is the hypothesis and q is the conclusion.</p>
<ul>
<li><p>Converse: q → p.</p></li>
<li><p>Inverse: ¬p → ¬q.</p></li>
<li><p>Contrapositive: ¬q → ¬p.</p></li>
<li><p>A conditional and its contrapositive are logically equivalent.</p></li>
<li><p>The converse and inverse are logically equivalent to each other, but not always to the original conditional.</p></li>
</ul>
<h3>7.5 De Morgan's laws</h3>
<code>¬(p ∧ q) ≡ ¬p ∨ ¬q</code><br>
<code>¬(p ∨ q) ≡ ¬p ∧ ¬q</code>
<p>To negate 'I studied and I passed', write 'I did not study or I did not pass.' To negate 'I studied or I passed', write 'I did not study and I did not pass.'</p>
<h3>7.6 Tautology, contradiction, and equivalence</h3>
<p>A tautology is always true. A contradiction is always false. Two statements are logically equivalent if their truth values match in every possible case.</p>
<h3>7.7 Quantifiers</h3>
<p>The universal quantifier ∀ means 'for every'. The existential quantifier ∃ means 'there is at least one'.</p>
<p>Negating a universal statement changes ∀ to ∃ and negates the condition. Negating an existential statement changes ∃ to ∀ and negates the condition.</p>
<div class="warn"><b>Example:</b> Negation of 'Every student passed' is 'At least one student did not pass.'</div>
<h3>7.8 Valid arguments</h3>
<p>An argument is valid if its conclusion follows from its premises. A sound argument is valid and has true premises.</p>
<p>Law of detachment: If p → q is true and p is true, then q follows.</p>
<div class="warn"><b>Example:</b> If a number is divisible by 4, it is even. The number 12 is divisible by 4. Therefore, 12 is even.</div>
<h3>Quick review</h3>
<ul>
<li><p>Conjunction requires both statements true.</p></li>
<li><p>Inclusive disjunction needs at least one statement true.</p></li>
<li><p>A conditional is false only for T → F.</p></li>
<li><p>Use 2ⁿ rows for n basic propositions.</p></li>
<li><p>A statement and its contrapositive are equivalent.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 7)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 7-1. Build a truth table and show equivalence</h4>
<p><strong>Problem:</strong> Show that p → q is logically equivalent to ¬p ∨ q.</p>
<table>
<thead>
<tr>
<th><strong>p</strong></th>
<th><strong>q</strong></th>
<th><strong>¬p</strong></th>
<th><strong>¬p ∨ q</strong></th>
<th><strong>p → q</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>T</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</tbody>
</table>
<div class="sol"><p>The last two columns match in every row, so the statements are logically equivalent.</p></div>
<p><strong>Three-variable table (8 rows).</strong> Truth table for (p ∧ q) → r:</p>
<table>
<thead>
<tr>
<th><strong>p</strong></th>
<th><strong>q</strong></th>
<th><strong>r</strong></th>
<th><strong>p ∧ q</strong></th>
<th><strong>(p ∧ q) → r</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td><strong>F</strong></td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
</tbody>
</table>
<div class="sol"><p>The statement is false only in the row where p and q are true and r is false. It is neither a tautology nor a contradiction.</p></div>
<h4>Example 7-2. Evaluate a compound statement from given truth values</h4>
<p><strong>Problem:</strong> Let p = T, q = F, r = T. Find the truth value of each statement.</p>
<div class="sol"><p>(p ∧ q) ∨ r = (T ∧ F) ∨ T = F ∨ T = <strong>T</strong>.</p>
<p>p → (q ∧ r) = T → (F ∧ T) = T → F = <strong>F</strong>.</p>
<p>¬(p ∨ q) = ¬(T ∨ F) = ¬T = <strong>F</strong>.</p>
<p>(p ↔︎ r) ∧ ¬q = (T ↔︎ T) ∧ T = T ∧ T = <strong>T</strong>.</p></div>
<h4>Example 7-3. Converse, inverse, and contrapositive</h4>
<p><strong>Problem:</strong> Statement: "If a number is divisible by 6, then it is divisible by 3." Write the related conditionals and test each.</p>
<div class="sol"><p><strong>Converse:</strong> If a number is divisible by 3, then it is divisible by 6. False (counterexample: 9).</p>
<p><strong>Inverse:</strong> If a number is not divisible by 6, then it is not divisible by 3. False (counterexample: 9).</p>
<p><strong>Contrapositive:</strong> If a number is not divisible by 3, then it is not divisible by 6. True.</p></div>
<p>The original statement and its contrapositive are both true, as expected for equivalent statements.</p>
<h4>Example 7-4. Negations using De Morgan's laws and quantifiers</h4>
<table>
<thead>
<tr>
<th><strong>Statement</strong></th>
<th><strong>Negation</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>It is sunny and warm.</td>
<td>It is not sunny or it is not warm.</td>
</tr>
<tr>
<td>The door is locked or the light is on.</td>
<td>The door is not locked and the light is not on.</td>
</tr>
<tr>
<td>All birds can fly.</td>
<td>At least one bird cannot fly.</td>
</tr>
<tr>
<td>Some students are absent.</td>
<td>No student is absent (every student is present).</td>
</tr>
<tr>
<td>x &gt; 3 or x &lt; −1</td>
<td>x ≤ 3 and x ≥ −1, which means −1 ≤ x ≤ 3</td>
</tr>
</tbody>
</table>
<h4>Example 7-5. Valid or invalid argument?</h4>
<p><strong>Valid (hypothetical chain):</strong> "If I study, I pass. If I pass, I graduate. I study. Therefore I graduate." Study → pass → graduate, so the conclusion follows.</p>
<p><strong>Invalid (affirming the conclusion):</strong> "If it rains, the street is wet. The street is wet. Therefore it rained." Write p = it rains, q = the street is wet. The row p = F, q = T makes both premises true (F → T is true, and q is true), but the conclusion p is false. One such row proves the argument is invalid.</p>
<h3>Practice Problems (Module 7)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 7-1.</strong> How many rows does a full truth table need for 4 basic propositions?</p>
<details><summary>Show answer</summary><div class="warn"><strong>16 rows.</strong> 2⁴ = 16.</div></details>
<p><strong>Problem 7-2.</strong> Build truth tables for ¬(p ∨ q) and ¬p ∧ ¬q. Are they equivalent?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Yes.</strong> For (p, q) = TT, TF, FT, FF, both statements give F, F, F, T. The columns match, which confirms De Morgan's law.</div></details>
<p><strong>Problem 7-3.</strong> Let p = F, q = T, r = F. Evaluate (a) (p → q) ∧ r; (b) (q ∨ r) → p; (c) p ↔︎ ¬q; (d) ¬(p ∨ r).</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) F. (b) F. (c) T. (d) T.</strong> (a) T ∧ F = F. (b) T → F = F. (c) F ↔︎ F = T. (d) ¬(F ∨ F) = ¬F = T.</div></details>
<p><strong>Problem 7-4.</strong> Write the converse, inverse, and contrapositive of "If a polygon is a square, then it has four sides." State which are true.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Converse:</strong> If a polygon has four sides, then it is a square (false; a rectangle is a counterexample). <strong>Inverse:</strong> If a polygon is not a square, then it does not have four sides (false; same counterexample). <strong>Contrapositive:</strong> If a polygon does not have four sides, then it is not a square (true).</div></details>
<p><strong>Problem 7-5.</strong> Negate: (a) Maria is present and Jose is absent. (b) The room is clean or the door is locked. (c) All students passed. (d) Some students did not attend.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Maria is absent or Jose is present. (b) The room is not clean and the door is not locked. (c) At least one student did not pass. (d) All students attended.</strong></div></details>
<p><strong>Problem 7-6.</strong> Classify as a tautology, contradiction, or neither: (a) p ∨ ¬p; (b) p ∧ ¬p; (c) p → (p ∨ q); (d) p ∧ q.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Tautology. (b) Contradiction. (c) Tautology</strong> (when p is true, p ∨ q is true; when p is false, the conditional is true). <strong>(d) Neither</strong> (true for TT only).</div></details>
<p><strong>Problem 7-7.</strong> Valid or invalid? (a) If it is Monday, I have class. It is Monday. So I have class. (b) If a number is divisible by 10, it is even. 14 is even. So 14 is divisible by 10. (c) If the battery is dead, the car will not start. The car starts. So the battery is not dead.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Valid</strong> (law of detachment). <strong>(b) Invalid</strong> (affirms the conclusion; 14 is even but not divisible by 10). <strong>(c) Valid</strong> (uses the contrapositive: if the car starts, the battery is not dead).</div></details>
<p><strong>Problem 7-8.</strong> Show with a truth table that (p → q) ∧ (q → p) is equivalent to p ↔︎ q.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Values for TT, TF, FT, FF:</strong> p → q = T, F, T, T; q → p = T, T, F, T; their conjunction = T, F, F, T; p ↔︎ q = T, F, F, T. The columns match.</div></details>
<p><strong>Problem 7-9.</strong> Let p = "It is raining" and q = "I bring an umbrella." Write in symbols: (a) If it is raining, I bring an umbrella. (b) If it is not raining, I do not bring an umbrella. (c) I bring an umbrella only if it is raining.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) p → q. (b) ¬p → ¬q</strong> (the inverse of (a)). <strong>(c) q → p.</strong> "Only if" points the arrow toward the condition that must hold.</div></details>`},
{ic:"🗳️",n:"Apportionment & Voting",
sub:"Standard divisor and quota, Hamilton and divisor methods, plurality, majority, Borda and pairwise comparison.",
tip:"Divide population by seats to get the divisor, give lower quotas first, then the largest fractional parts. Plurality is not majority.",
r:`<h2>Apportionment &amp; Voting</h2>
<h3>8.1 Apportionment</h3>
<p>Apportionment allocates a fixed number of seats among groups, often according to population. The result must use whole seats even when the fair share is fractional.</p>
<h3>8.2 Standard divisor and quota</h3>
<code>Standard divisor = total population / total seats</code><br>
<code>Standard quota for a group = group population / standard divisor</code>
<div class="warn"><b>Example:</b> Three groups have populations 1,000, 2,000, and 3,000. There are 12 seats. Total population = 6,000. Standard divisor = 6,000/12 = 500. Quotas are 2, 4, and 6 seats.</div>
<h3>8.3 Hamilton's method</h3>
<ol start="20" type="1">
<li><p>Find the standard divisor.</p></li>
<li><p>Find every standard quota.</p></li>
<li><p>Give each group its lower quota, the whole number below or equal to the quota.</p></li>
<li><p>Count the seats still unassigned.</p></li>
<li><p>Give the remaining seats to groups with the largest fractional parts.</p></li>
</ol>
<div class="warn"><b>Example:</b> Quotas are 4.7, 3.2, and 2.1 for 11 seats total. Lower quotas are 4, 3, and 2, using 9 seats. Two seats remain. The fractional parts are .7, .2, and .1, so the two extra seats go to the first and second groups. Final allocation: 5, 4, 2.</div>
<h3>8.4 Other apportionment methods</h3>
<p>Divisor methods adjust a divisor until rounded quotas sum to the required number of seats. Jefferson's method rounds down. Adams's method rounds up. Webster's method rounds to the nearest whole number. Huntington-Hill uses a geometric-mean rounding rule. Follow the exact procedure given in your module because different methods can produce different allocations.</p>
<p>Geometric mean of positive numbers a and b:</p>
<code>GM = √(ab)</code>
<div class="warn"><b>Example:</b> GM of 4 and 9 = √36 = 6.</div>
<h3>8.5 Voting terms</h3>
<ul>
<li><p>Plurality: the candidate with the most first-place votes wins, even without more than half the votes.</p></li>
<li><p>Majority: more than half of the votes under the stated rule.</p></li>
<li><p>Runoff: a further election between leading candidates when required.</p></li>
<li><p>Ranked ballot: voters list candidates in order of preference.</p></li>
<li><p>Borda count: candidates receive points based on ranking; the point totals decide the winner.</p></li>
<li><p>Pairwise comparison: compare each pair of candidates and count which candidate wins each head-to-head contest.</p></li>
<li><p>Condorcet winner: a candidate who defeats every other candidate in pairwise comparisons, if such a candidate exists.</p></li>
</ul>
<p>Plurality example: Candidate A gets 42 votes, B gets 35, and C gets 23. A has the most votes and wins under plurality. A does not have a majority because 42 is not more than 50 out of 100.</p>
<h3>8.6 Voting calculations</h3>
<p>For Borda count, first write the scoring rule used by the instructor. If there are four candidates, one common rule gives 3 points for first, 2 for second, 1 for third, and 0 for fourth. Other versions use a different scale but preserve the ranking order.</p>
<p>For pairwise comparison, make a table. Compare A against B, A against C, and B against C. Award each pairwise win according to the class rule, then total the wins.</p>
<h3>Quick review</h3>
<ul>
<li><p>Apportionment must distribute the exact number of available seats.</p></li>
<li><p>Hamilton's method assigns lower quotas first, then uses the largest fractional parts.</p></li>
<li><p>Plurality means most votes. Majority means more than half.</p></li>
<li><p>Always use the voting rule specified in the question.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 8)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 8-1. Hamilton's method</h4>
<p><strong>Problem:</strong> Four towns have populations 5,230, 3,810, 2,160, and 1,300. Apportion 25 seats.</p>
<div class="sol"><p><strong>Step 1.</strong> Total = 12,500. Standard divisor = <span class="mth"><span class="fr"><span class="n">12,500</span><span class="d">25</span></span> = 500</span>.</p>
<p><strong>Step 2. Quotas:</strong> A = 5,230 ÷ 500 = 10.46; B = 3,810 ÷ 500 = 7.62; C = 2,160 ÷ 500 = 4.32; D = 1,300 ÷ 500 = 2.60.</p>
<p><strong>Step 3. Lower quotas:</strong> 10, 7, 4, 2, total = 23. Two seats remain.</p>
<p><strong>Step 4.</strong> Largest fractional parts: B (.62) and D (.60). They each get one more seat.</p></div>
<table>
<thead>
<tr>
<th><strong>Town</strong></th>
<th><strong>Quota</strong></th>
<th><strong>Lower quota</strong></th>
<th><strong>Final seats</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>10.46</td>
<td>10</td>
<td>10</td>
</tr>
<tr>
<td>B</td>
<td>7.62</td>
<td>7</td>
<td>8</td>
</tr>
<tr>
<td>C</td>
<td>4.32</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>D</td>
<td>2.60</td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td></td>
<td>23</td>
<td><strong>25</strong></td>
</tr>
</tbody>
</table>
<h4>Example 8-2. Divisor methods (Jefferson, Adams, Webster)</h4>
<p><strong>Problem:</strong> Populations A = 5,920, B = 790, C = 5,260, D = 8,440 with 13 seats. Total = 20,410, so the standard divisor = 20,410 ÷ 13 = 1,570.</p>
<div class="sol"><p><strong>Standard quotas:</strong> 3.771, 0.503, 3.350, 5.376.</p>
<p><strong>Webster</strong> (round to nearest): 4, 1, 3, 5 = 13 seats right away.</p>
<p><strong>Jefferson</strong> (round down): at the standard divisor the sum is 3 + 0 + 3 + 5 = 11, too few. Use a smaller modified divisor, such as 1,400: quotas 4.229, 0.564, 3.757, 6.029 round down to 4, 0, 3, 6 = 13. ✓</p>
<p><strong>Adams</strong> (round up): at the standard divisor the sum is 4 + 1 + 4 + 6 = 15, too many. Use a larger divisor, such as 1,800: quotas 3.289, 0.439, 2.922, 4.689 round up to 4, 1, 3, 5 = 13. ✓</p></div>
<table>
<thead>
<tr>
<th><strong>Method</strong></th>
<th><strong>A</strong></th>
<th><strong>B</strong></th>
<th><strong>C</strong></th>
<th><strong>D</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Jefferson (d = 1,400)</td>
<td>4</td>
<td>0</td>
<td>3</td>
<td>6</td>
</tr>
<tr>
<td>Adams (d = 1,800)</td>
<td>4</td>
<td>1</td>
<td>3</td>
<td>5</td>
</tr>
<tr>
<td>Webster (d = 1,570)</td>
<td>4</td>
<td>1</td>
<td>3</td>
<td>5</td>
</tr>
</tbody>
</table>
<p>Same data, different rules, different answers: Jefferson favors the largest town and gives the smallest town no seat. Always follow the method named in the question.</p>
<h4>Example 8-3. Huntington-Hill rounding</h4>
<p><strong>Rule:</strong> For a quota between L and L + 1, find the geometric mean <span class="mth">√<span class="sq">L(L + 1)</span></span>. If the quota is at least the geometric mean, round up. Otherwise, round down.</p>
<table>
<thead>
<tr>
<th><strong>Quota</strong></th>
<th><strong>L</strong></th>
<th><strong>√(L(L+1))</strong></th>
<th><strong>Compare</strong></th>
<th><strong>Rounded</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>4.48</td>
<td>4</td>
<td><span class="mth">√<span class="sq">20</span> = 4.4721</span></td>
<td>4.48 &gt; 4.4721</td>
<td>5</td>
</tr>
<tr>
<td>4.46</td>
<td>4</td>
<td><span class="mth">√<span class="sq">20</span> = 4.4721</span></td>
<td>4.46 &lt; 4.4721</td>
<td>4</td>
</tr>
</tbody>
</table>
<p>Webster would round both 4.48 and 4.46 down to 4. Huntington-Hill rounds 4.48 up.</p>
<h4>Example 8-4. Plurality, Borda count, pairwise comparison, and runoff</h4>
<p><strong>Problem:</strong> 27 voters rank candidates A, B, and C.</p>
<table>
<thead>
<tr>
<th><strong>Number of voters</strong></th>
<th><strong>5</strong></th>
<th><strong>6</strong></th>
<th><strong>7</strong></th>
<th><strong>9</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1st choice</td>
<td>B</td>
<td>B</td>
<td>A</td>
<td>C</td>
</tr>
<tr>
<td>2nd choice</td>
<td>A</td>
<td>C</td>
<td>C</td>
<td>A</td>
</tr>
<tr>
<td>3rd choice</td>
<td>C</td>
<td>A</td>
<td>B</td>
<td>B</td>
</tr>
</tbody>
</table>
<div class="sol"><p><strong>Plurality:</strong> first-place votes are A = 7, B = 5 + 6 = 11, C = 9. B wins with the most votes, but 11 is not a majority (a majority needs more than 13.5, so at least 14).</p>
<p><strong>Borda</strong> (2 points for 1st, 1 for 2nd, 0 for 3rd): A = 5(1) + 6(0) + 7(2) + 9(1) = 28. B = 5(2) + 6(2) + 7(0) + 9(0) = 22. C = 5(0) + 6(1) + 7(1) + 9(2) = 31. <strong>C wins.</strong> (Check: 28 + 22 + 31 = 81 = 27 × 3.)</p>
<p><strong>Pairwise:</strong> A vs B: A is ranked above B by 7 + 9 = 16 voters and B above A by 11, so A wins. A vs C: A is above C for 5 + 7 = 12 and C above A for 15, so C wins. B vs C: B is above C for 5 + 6 = 11 and C above B for 16, so C wins. <strong>C wins both of its contests</strong>, so C is the Condorcet winner.</p>
<p><strong>Runoff</strong> between the top two (B with 11, C with 9): C beats B 16 to 11, so <strong>C wins</strong>.</p>
<p><strong>Summary: plurality picks B, while Borda, pairwise comparison, and the runoff pick C.</strong></p></div>
<h3>Practice Problems (Module 8)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 8-1.</strong> Find the standard divisor and standard quotas: populations 4,500, 3,600, 1,900 (total 10,000) with 10 seats.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Standard divisor = 1,000; quotas = 4.5, 3.6, 1.9.</strong></div></details>
<p><strong>Problem 8-2.</strong> Use Hamilton's method: populations 14,500, 9,800, 5,700 with 15 seats.</p>
<details><summary>Show answer</summary><div class="warn"><strong>7, 5, and 3 seats.</strong> Standard divisor = 30,000 ÷ 15 = 2,000. Quotas = 7.25, 4.90, 2.85. Lower quotas = 7, 4, 2 (total 13). The two remaining seats go to the largest fractions, .90 and .85, so seats are 7, 5, 3.</div></details>
<p><strong>Problem 8-3.</strong> Using Hamilton's method, apportion 11 seats among three groups whose standard quotas are 4.7, 3.2, and 3.1.</p>
<details><summary>Show answer</summary><div class="warn"><strong>5, 3, and 3 seats.</strong> Lower quotas 4, 3, 3 sum to 10, so one seat remains. It goes to the largest fractional part (.7), which belongs to the first group.</div></details>
<p><strong>Problem 8-4.</strong> Use Huntington-Hill rounding for each quota: (a) 7.47; (b) 2.45; (c) 11.5; (d) 1.41.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 7. (b) 3. (c) 12. (d) 1.</strong> (a) √56 = 7.4833 and 7.47 is below it. (b) √6 = 2.4495 and 2.45 is above it. (c) √132 = 11.4891 and 11.5 is above it. (d) √2 = 1.4142 and 1.41 is below it.</div></details>
<p><strong>Problem 8-5.</strong> Votes: A = 120, B = 95, C = 85. Who wins by plurality? Is there a majority winner? Who would be in a runoff?</p>
<details><summary>Show answer</summary><div class="warn"><strong>A wins by plurality with 120 votes. No majority winner.</strong> There are 300 votes, so a majority needs more than 150. A and B would meet in a runoff.</div></details>
<p><strong>Problem 8-6.</strong> Use this schedule for Problems 8-6 to 8-8: 40 voters rank X &gt; Y &gt; Z, 35 voters rank Y &gt; Z &gt; X, and 25 voters rank Z &gt; Y &gt; X (100 voters). Find the plurality winner and whether a majority exists.</p>
<details><summary>Show answer</summary><div class="warn"><strong>X wins by plurality with 40 votes, but there is no majority</strong> (a majority needs more than 50).</div></details>
<p><strong>Problem 8-7.</strong> Find the Borda count winner for the schedule in Problem 8-6 (2, 1, 0 points).</p>
<details><summary>Show answer</summary><div class="warn"><strong>Y wins with 135 points.</strong> X = 40(2) = 80. Y = 40(1) + 35(2) + 25(1) = 135. Z = 35(1) + 25(2) = 85. Total = 300 = 100 × 3.</div></details>
<p><strong>Problem 8-8.</strong> For the schedule in Problem 8-6, do a pairwise comparison and a runoff between the top two plurality candidates. Is there a Condorcet winner?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Y is the Condorcet winner and wins the runoff.</strong> X vs Y: Y is preferred by 35 + 25 = 60, so Y wins 60 to 40. X vs Z: Z is preferred by 60, so Z wins 60 to 40. Y vs Z: Y is preferred by 40 + 35 = 75, so Y wins 75 to 25. Y wins both contests. Runoff between X (40) and Y (35): Y wins 60 to 40.</div></details>`},
{ic:"🔷",n:"Geometric Designs",
sub:"Fractals, isometries (translation, reflection, rotation, glide reflection) and how to analyze a design.",
tip:"Isometries keep distances. Name the transformation, find the repeated unit, and locate the line or point of symmetry.",
r:`<h2>Geometric Designs</h2>
<h3>9.1 Geometry</h3>
<p>Geometry studies points, lines, angles, shapes, surfaces, solids, distance, and spatial relationships. Euclidean geometry describes familiar flat and solid shapes. Geometric ideas appear in buildings, art, maps, patterns, and design.</p>
<h3>9.2 Fractals</h3>
<p>A fractal is a shape or pattern with detail that repeats at different scales. Many fractals are formed by repeating a simple rule. Exact self-similarity occurs in mathematical fractals. Natural forms such as coastlines, clouds, and branching plants often show approximate fractal patterns.</p>
<p>Examples include the Sierpinski triangle, the Koch snowflake, branching trees, and some fern shapes.</p>
<p>If a construction replaces one part with several smaller copies, the number of parts and their scale determine how the total detail changes. For ideal mathematical fractals, the fractal dimension often measures complexity between ordinary whole-number dimensions.</p>
<h3>9.3 Isometries</h3>
<p>An isometry is a transformation that preserves distances. The image has the same size and shape as the original figure.</p>
<ul>
<li><p>Translation: slides a figure without turning or flipping it.</p></li>
<li><p>Reflection: flips a figure across a line.</p></li>
<li><p>Rotation: turns a figure around a fixed point by a stated angle.</p></li>
<li><p>Glide reflection: combines a reflection with a translation along the reflection line.</p></li>
</ul>
<p>A translation, rotation, or reflection preserves side lengths and angles. These transformations may change a figure's position or orientation, but not its size.</p>
<h3>9.4 Geometric design</h3>
<p>Geometric designs use shapes, symmetry, repetition, rotation, reflection, scale, and patterns. To analyze a design, identify the repeated unit, the transformation used, and the line or point of symmetry.</p>
<h3>Quick review</h3>
<ul>
<li><p>Fractals show repeated detail at different scales.</p></li>
<li><p>An isometry preserves distances.</p></li>
<li><p>Translation slides, reflection flips, and rotation turns.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 9)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 9-1. Counting pieces in the Sierpinski triangle</h4>
<p><strong>Problem:</strong> Stage 0 is one solid triangle. At each stage, every triangle is replaced by 3 smaller triangles (each with half the side). Find the number of small triangles at stage 5 and the fraction of the original area that remains at stage 3.</p>
<div class="sol"><p>Number at stage n = 3ⁿ. Stage 5: 3⁵ = 243 triangles.</p>
<p>Each stage keeps 3 of every 4 quarter-size pieces, so the remaining area is (3/4)ⁿ of the original. Stage 3: <span class="mth">(<span class="fr"><span class="n">3</span><span class="d">4</span></span>)<sup>3</sup> = <span class="fr"><span class="n">27</span><span class="d">64</span></span> ≈ 0.42</span>.</p></div>
<h4>Example 9-2. Perimeter of the Koch snowflake</h4>
<p><strong>Problem:</strong> A Koch snowflake starts as an equilateral triangle with side 9 cm. At each stage, every segment is replaced by 4 segments, each one-third as long. Find the perimeter at stages 0 to 3.</p>
<table>
<thead>
<tr>
<th><strong>Stage</strong></th>
<th><strong>Number of segments</strong></th>
<th><strong>Length of each</strong></th>
<th><strong>Perimeter</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>3</td>
<td>9 cm</td>
<td>27 cm</td>
</tr>
<tr>
<td>1</td>
<td>12</td>
<td>3 cm</td>
<td>36 cm</td>
</tr>
<tr>
<td>2</td>
<td>48</td>
<td>1 cm</td>
<td>48 cm</td>
</tr>
<tr>
<td>3</td>
<td>192</td>
<td>1/3 cm</td>
<td>64 cm</td>
</tr>
</tbody>
</table>
<div class="sol"><p>Each stage multiplies the perimeter by 4/3: 27 × 4/3 = 36, 36 × 4/3 = 48, 48 × 4/3 = 64. The perimeter grows without limit as the stages continue.</p></div>
<h4>Example 9-3. Fractal dimension (extra tip)</h4>
<p>If a figure is made of N copies of itself, each scaled down by a factor s, its self-similarity dimension is <span class="mth">D = <span class="fr"><span class="n">log N</span><span class="d">log s</span></span></span>. (Use this only if your instructor covers it.)</p>
<div class="sol"><p>Sierpinski triangle: N = 3, s = 2, so <span class="mth">D = <span class="fr"><span class="n">log 3</span><span class="d">log 2</span></span> ≈ 1.585</span>.</p>
<p>Koch curve: N = 4, s = 3, so <span class="mth">D = <span class="fr"><span class="n">log 4</span><span class="d">log 3</span></span> ≈ 1.262</span>.</p></div>
<p>Both values lie between 1 (a line) and 2 (a filled plane region), which reflects their complexity.</p>
<h4>Example 9-4. Isometries on coordinates</h4>
<p><strong>Problem:</strong> Triangle ABC has A(1, 1), B(4, 1), C(2, 3). Find the image of each vertex under each transformation.</p>
<table>
<thead>
<tr>
<th><strong>Transformation</strong></th>
<th><strong>Rule</strong></th>
<th><strong>A′</strong></th>
<th><strong>B′</strong></th>
<th><strong>C′</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Translation by (3, −2)</td>
<td>(x + 3, y − 2)</td>
<td>(4, −1)</td>
<td>(7, −1)</td>
<td>(5, 1)</td>
</tr>
<tr>
<td>Reflection across the x-axis</td>
<td>(x, −y)</td>
<td>(1, −1)</td>
<td>(4, −1)</td>
<td>(2, −3)</td>
</tr>
<tr>
<td>Reflection across the y-axis</td>
<td>(−x, y)</td>
<td>(−1, 1)</td>
<td>(−4, 1)</td>
<td>(−2, 3)</td>
</tr>
<tr>
<td>Rotation 90° counterclockwise about the origin</td>
<td>(−y, x)</td>
<td>(−1, 1)</td>
<td>(−1, 4)</td>
<td>(−3, 2)</td>
</tr>
<tr>
<td>Rotation 180° about the origin</td>
<td>(−x, −y)</td>
<td>(−1, −1)</td>
<td>(−4, −1)</td>
<td>(−2, −3)</td>
</tr>
<tr>
<td>Reflection across the line y = x</td>
<td>(y, x)</td>
<td>(1, 1)</td>
<td>(1, 4)</td>
<td>(3, 2)</td>
</tr>
<tr>
<td>Glide reflection: reflect across the x-axis, then translate by (5, 0)</td>
<td>(x + 5, −y)</td>
<td>(6, −1)</td>
<td>(9, −1)</td>
<td>(7, −3)</td>
</tr>
</tbody>
</table>
<p>In every case the side lengths and angles are unchanged, which is what makes these isometries. For example, AB = 3 before and after each transformation.</p>
<h4>Example 9-5. Identify the transformation from a point and its image</h4>
<div class="sol"><p>(2, 3) → (2, −3): reflection across the x-axis.</p>
<p>(4, −1) → (−4, −1): reflection across the y-axis.</p>
<p>(1, 2) → (6, 2): translation 5 units to the right, by (5, 0).</p>
<p>(3, 2) → (−2, 3): rotation 90° counterclockwise about the origin, using (x, y) → (−y, x).</p></div>
<h3>Practice Problems (Module 9)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 9-1.</strong> How many small solid triangles are in the Sierpinski triangle at stage 4? At stage 6?</p>
<details><summary>Show answer</summary><div class="warn"><strong>81 and 729.</strong> 3⁴ = 81 and 3⁶ = 729.</div></details>
<p><strong>Problem 9-2.</strong> A Koch snowflake starts with a triangle of side 6 cm. Find the perimeter at stage 0 and at stage 2.</p>
<details><summary>Show answer</summary><div class="warn"><strong>18 cm and 32 cm.</strong> Stage 0: 3 × 6 = 18. Stage 2: 18 × (4/3)² = 18 × 16/9 = 32.</div></details>
<p><strong>Problem 9-3.</strong> A figure is made of 5 copies of itself, each scaled down by a factor of 3. Find its fractal dimension.</p>
<details><summary>Show answer</summary><div class="warn"><strong>D = log 5 ÷ log 3 ≈ 1.465.</strong></div></details>
<p><strong>Problem 9-4.</strong> Translate triangle P(−2, 1), Q(0, 4), R(3, 2) by (4, −3). Find P′, Q′, R′.</p>
<details><summary>Show answer</summary><div class="warn"><strong>P′(2, −2), Q′(4, 1), R′(7, −1).</strong> Add 4 to each x and subtract 3 from each y.</div></details>
<p><strong>Problem 9-5.</strong> Reflect P(−2, 1), Q(0, 4), R(3, 2) across the y-axis.</p>
<details><summary>Show answer</summary><div class="warn"><strong>P′(2, 1), Q′(0, 4), R′(−3, 2).</strong> The rule is (x, y) → (−x, y).</div></details>
<p><strong>Problem 9-6.</strong> Rotate the point (3, 2) about the origin by (a) 90° counterclockwise; (b) 180°; (c) 270° counterclockwise.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) (−2, 3). (b) (−3, −2). (c) (2, −3).</strong> Rules: 90° is (−y, x), 180° is (−x, −y), 270° is (y, −x).</div></details>
<p><strong>Problem 9-7.</strong> Name the transformation: (a) (5, 2) → (2, 5); (b) (−3, 4) → (3, 4); (c) (1, 1) → (−2, 3); (d) (2, 6) → (−2, −6).</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Reflection across the line y = x. (b) Reflection across the y-axis. (c) Translation by (−3, 2). (d) Rotation of 180° about the origin.</strong></div></details>
<p><strong>Problem 9-8.</strong> Reflect the point (5, −2) across the horizontal line y = 1.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(5, 4).</strong> The point is 3 units below the line, so its image is 3 units above it: y = 1 + 3 = 4. The x-coordinate stays the same.</div></details>
<p><strong>Problem 9-9.</strong> Do all isometries preserve distance and area? Is a transformation that doubles the size of a figure an isometry?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Yes, isometries preserve distance, angles, and area. Doubling the size is not an isometry</strong> because distances change.</div></details>
<p><strong>Problem 9-10.</strong> How many lines of reflection symmetry does a regular hexagon have? What is its smallest rotation angle that maps it onto itself?</p>
<details><summary>Show answer</summary><div class="warn"><strong>6 lines of symmetry and a smallest rotation of 60°.</strong> 360° ÷ 6 = 60°.</div></details>`},
{ic:"💰",n:"Mathematics of Finance",
sub:"Simple and compound interest, present value, savings, stocks and bonds, and consumer loans.",
tip:"Convert rates to decimals, match time to the rate period, and compare total cost rather than only the monthly payment.",
r:`<h2>Mathematics of Finance</h2>
<h3>10.1 Time value of money</h3>
<p>The time value of money means a sum available today differs in value from the same nominal sum received later. Money available now might earn interest or investment returns. Inflation, risk, fees, and access to cash also affect financial choices.</p>
<p>Principal P is the starting amount. Interest I is the cost of borrowing or the income earned on savings. Rate r is the interest rate per period. Time t is the number of periods.</p>
<h3>10.2 Simple interest</h3>
<code>I = Prt</code><br>
<code>Future value A = P + I = P(1 + rt)</code>
<p>Use r as a decimal and make time match the rate period. If the rate is annual, express time in years.</p>
<div class="warn"><b>Example:</b> P = ₱10,000, r = 6% per year, t = 2 years. I = 10,000(0.06)(2) = ₱1,200. Future value = ₱11,200.</div>
<h3>10.3 Compound interest</h3>
<code>A = P(1 + r/m)^(mt)</code>
<p>A is the future value, P is the principal, r is the annual nominal rate as a decimal, m is the number of compounding periods per year, and t is time in years.</p>
<div class="warn"><b>Example:</b> ₱10,000 at 6% annual interest compounded yearly for 2 years. A = 10,000(1.06)² = ₱11,236. Interest earned = ₱1,236.</div>
<p>Compound interest earns interest on prior interest. More frequent compounding often gives a higher future value when the nominal annual rate and other conditions stay the same.</p>
<h3>10.4 Present value</h3>
<code>For compound interest: P = A / (1 + r/m)^(mt)</code><br>
<code>For simple interest: P = A / (1 + rt)</code>
<p>Present value estimates the amount needed now to reach a target future amount under a stated rate and time period.</p>
<h3>10.5 Savings, stocks, and bonds</h3>
<p>A savings account is a deposit product. Check its rate, fees, access rules, and deposit protection terms.</p>
<p>A stock represents ownership in a company. A shareholder's return might include price changes and dividends, but returns are not guaranteed.</p>
<p>A bond is a loan to an issuer. The issuer promises payments under the bond terms, but default and market risks exist. Bond prices often move in the opposite direction of market interest rates.</p>
<p>Before comparing investments, check fees, taxes, risk, time horizon, liquidity, and whether returns are guaranteed or variable.</p>
<h3>10.6 Consumer loans</h3>
<p>A loan amount is the principal borrowed. The borrower repays principal and interest, and often fees. The monthly payment depends on the amount, rate, term, and payment schedule.</p>
<p>For a standard fixed-rate loan with monthly payments:</p>
<code>Payment = P i / [1 − (1 + i)^(-n)]</code>
<p>P is the amount borrowed, i is the monthly interest rate, and n is the number of monthly payments. This formula assumes equal payments and a fixed periodic rate. Fees, insurance, and taxes might be separate.</p>
<p>Credit cards: interest often applies to unpaid balances according to the card agreement. Paying the statement balance in full by the due date often avoids purchase interest when the account terms provide a grace period.</p>
<p>Car loans: compare the total cost, down payment, annual percentage rate, term, fees, and any final payment. A longer term often lowers the monthly payment but raises total interest.</p>
<p>Real property loans: compare the rate, term, down payment, fees, insurance, property costs, and risks if payments are missed.</p>
<h3>10.7 Worked loan example</h3>
<p>Borrow ₱12,000 at a monthly rate of 1% for 12 monthly payments. P = 12,000, i = 0.01, n = 12.</p>
<p>Payment = 12,000(0.01) / [1 − (1.01)^(-12)] ≈ ₱1,066.19 per month. The exact amount depends on rounding and the lender's terms.</p>
<h3>Quick review</h3>
<ul>
<li><p>Simple interest is calculated on the original principal.</p></li>
<li><p>Compound interest includes interest on prior interest.</p></li>
<li><p>Convert percentage rates to decimals before calculation.</p></li>
<li><p>Match the time unit to the interest period.</p></li>
<li><p>Compare total cost, not only the monthly payment.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 10)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 10-1. Simple interest: find I, A, r, or t</h4>
<p><strong>Problem 1:</strong> Find the interest and future value of ₱25,000 at 4.5% per year for 18 months.</p>
<div class="sol"><p>Convert 18 months to years: t = 18 ÷ 12 = 1.5. Then I = Prt = 25,000(0.045)(1.5) = ₱1,687.50.</p>
<p>A = P + I = 25,000 + 1,687.50 = ₱26,687.50.</p></div>
<p><strong>Problem 2:</strong> Interest of ₱900 is earned on ₱15,000 in 2 years. Find the annual rate. Rearrange I = Prt to <span class="mth">r = <span class="fr"><span class="n">I</span><span class="d">Pt</span></span> = <span class="fr"><span class="n">900</span><span class="d">15,000 × 2</span></span> = 0.03</span>, so <strong>3%</strong>.</p>
<p><strong>Problem 3:</strong> How long does ₱8,000 take to earn ₱600 at 5% per year? <span class="mth">t = <span class="fr"><span class="n">I</span><span class="d">Pr</span></span> = <span class="fr"><span class="n">600</span><span class="d">8,000 × 0.05</span></span> = 1.5</span> <strong>years</strong>.</p>
<h4>Example 10-2. Compound interest with different compounding periods</h4>
<p><strong>Problem:</strong> ₱50,000 is invested at 6% per year for 3 years. Compare the future value when interest is compounded yearly, semiannually, quarterly, and monthly.</p>
<table>
<thead>
<tr>
<th><strong>Compounding</strong></th>
<th><strong>m</strong></th>
<th><span class="mth">A = 50,000 (1 + <span class="fr"><span class="n">0.06</span><span class="d">m</span></span>)<sup>3m</sup></span></th>
<th><strong>Future value</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Yearly</td>
<td>1</td>
<td>50,000(1.06)³</td>
<td>₱59,550.80</td>
</tr>
<tr>
<td>Semiannually</td>
<td>2</td>
<td>50,000(1.03)⁶</td>
<td>₱59,702.61</td>
</tr>
<tr>
<td>Quarterly</td>
<td>4</td>
<td>50,000(1.015)¹²</td>
<td>₱59,780.91</td>
</tr>
<tr>
<td>Monthly</td>
<td>12</td>
<td>50,000(1.005)³⁶</td>
<td>₱59,834.03</td>
</tr>
</tbody>
</table>
<p>More frequent compounding gives a slightly higher amount. For comparison, simple interest would give 50,000 + 50,000(0.06)(3) = ₱59,000.</p>
<h4>Example 10-3. Present value</h4>
<p><strong>Problem:</strong> How much must be invested now at 5% compounded annually to have ₱100,000 in 5 years?</p>
<div class="sol"><p><span class="mth">P = <span class="fr"><span class="n">A</span><span class="d">(1 + <span class="fr"><span class="n">r</span><span class="d">m</span></span>)<sup>mt</sup></span></span> = <span class="fr"><span class="n">100,000</span><span class="d">(1.05)<sup>5</sup></span></span> = <span class="fr"><span class="n">100,000</span><span class="d">1.27628</span></span> ≈ 78,352.62</span> (<strong>₱78,352.62</strong>).</p>
<div class="warn"><b>Check:</b> 78,352.62 × 1.27628 ≈ 100,000. ✓</div></div>
<h4>Example 10-4. Loan payment and total interest</h4>
<p><strong>Problem:</strong> A ₱120,000 loan has a nominal annual rate of 12% compounded monthly and is paid in 24 equal monthly payments. Find the payment, the total paid, and the total interest.</p>
<div class="sol"><p>i = 12% ÷ 12 = 1% = 0.01 per month; n = 24; P = 120,000.</p>
<p><span class="mth">Payment = <span class="fr"><span class="n">Pi</span><span class="d">1 - (1 + i)<sup>- n</sup></span></span> = <span class="fr"><span class="n">120,000(0.01)</span><span class="d">1 - (1.01)<sup>- 24</sup></span></span> = <span class="fr"><span class="n">1,200</span><span class="d">0.21243</span></span> ≈ 5,648.82</span> (<strong>₱5,648.82</strong> per month).</p>
<p>Total paid = 24 × 5,648.82 = ₱135,571.68. Total interest ≈ 135,571.68 − 120,000 = <strong>₱15,571.68</strong> (tiny differences come from rounding the payment).</p></div>
<h4>Example 10-5. Compare total cost, not just the monthly payment</h4>
<p><strong>Problem:</strong> A ₱50,000 loan can be repaid at ₱2,500 per month for 24 months (Plan A) or ₱1,900 per month for 36 months (Plan B). Which costs less overall?</p>
<div class="sol"><p>Plan A total = 2,500 × 24 = ₱60,000, so interest = ₱10,000.</p>
<p>Plan B total = 1,900 × 36 = ₱68,400, so interest = ₱18,400.</p>
<p><strong>Answer: Plan B has the smaller monthly payment, but Plan A costs ₱8,400 less overall.</strong></p></div>
<h4>Example 10-6. Stocks and bonds</h4>
<p><strong>Stock:</strong> A person buys 200 shares at ₱45, sells them at ₱52, and receives dividends of ₱1.50 per share. Price gain = (52 − 45)(200) = ₱1,400. Dividends = 1.50 × 200 = ₱300. Total gain = ₱1,700. Amount invested = 45 × 200 = ₱9,000. Return = 1,700 ÷ 9,000 ≈ <strong>18.9%</strong>.</p>
<p><strong>Bond:</strong> A ₱20,000 bond pays 5% interest each year. Yearly interest = 20,000 × 0.05 = ₱1,000. Over 8 years the interest received is ₱8,000, provided the issuer does not default.</p>
<h3>Practice Problems (Module 10)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 10-1.</strong> Find the simple interest and future value: P = ₱12,000, r = 5% per year, t = 3 years.</p>
<details><summary>Show answer</summary><div class="warn"><strong>I = ₱1,800; A = ₱13,800.</strong> I = 12,000(0.05)(3).</div></details>
<p><strong>Problem 10-2.</strong> Find the simple interest on ₱8,000 at 6% per year for 9 months.</p>
<details><summary>Show answer</summary><div class="warn"><strong>₱360.</strong> t = 9 ÷ 12 = 0.75 years. I = 8,000(0.06)(0.75) = 360. Future value = ₱8,360.</div></details>
<p><strong>Problem 10-3.</strong> A loan of ₱15,000 earns ₱1,350 interest over 3 years. Find the annual simple interest rate.</p>
<details><summary>Show answer</summary><div class="warn"><strong>3%.</strong> r = 1,350 ÷ (15,000 × 3) = 0.03.</div></details>
<p><strong>Problem 10-4.</strong> How many years will ₱20,000 take to earn ₱3,000 in simple interest at 5% per year?</p>
<details><summary>Show answer</summary><div class="warn"><strong>3 years.</strong> t = 3,000 ÷ (20,000 × 0.05) = 3.</div></details>
<p><strong>Problem 10-5.</strong> Find the future value of ₱30,000 at 4% compounded annually for 5 years.</p>
<details><summary>Show answer</summary><div class="warn"><strong>₱36,499.59.</strong> A = 30,000(1.04)⁵.</div></details>
<p><strong>Problem 10-6.</strong> Find the future value of ₱10,000 at 12% per year compounded monthly for 1 year.</p>
<details><summary>Show answer</summary><div class="warn"><strong>₱11,268.25.</strong> A = 10,000(1.01)¹².</div></details>
<p><strong>Problem 10-7.</strong> Compare ₱5,000 at 8% for 3 years under simple interest and annual compounding. How much more does compounding earn?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Simple: ₱6,200. Compound: ₱6,298.56. Compounding earns ₱98.56 more.</strong> Simple: 5,000 + 5,000(0.08)(3) = 6,200. Compound: 5,000(1.08)³ = 6,298.56.</div></details>
<p><strong>Problem 10-8.</strong> How much should be invested now at 6% compounded semiannually to have ₱60,000 in 4 years?</p>
<details><summary>Show answer</summary><div class="warn"><strong>≈ ₱47,364.55.</strong> P = 60,000 ÷ (1.03)⁸.</div></details>
<p><strong>Problem 10-9.</strong> Find the monthly payment on ₱30,000 at 1.5% per month for 12 months, and the total interest.</p>
<details><summary>Show answer</summary><div class="warn"><strong>Payment ≈ ₱2,750.40; total interest ≈ ₱3,004.80.</strong> Payment = 30,000(0.015) ÷ [1 − (1.015)⁻¹²]. Total paid ≈ 12 × 2,750.40 = 33,004.80.</div></details>
<p><strong>Problem 10-10.</strong> Loan X: ₱3,400 per month for 36 months. Loan Y: ₱4,700 per month for 24 months. Both borrow ₱100,000. Which costs less in total?</p>
<details><summary>Show answer</summary><div class="warn"><strong>Loan Y.</strong> X total = ₱122,400 and Y total = ₱112,800. Loan X has the lower payment but costs ₱9,600 more overall.</div></details>
<p><strong>Problem 10-11.</strong> A person buys 100 shares at ₱80, sells at ₱92, and receives ₱2 dividend per share. Find the total gain and percent return.</p>
<details><summary>Show answer</summary><div class="warn"><strong>₱1,400 gain; 17.5% return.</strong> Price gain = 12 × 100 = 1,200. Dividends = 200. Total = 1,400. Return = 1,400 ÷ 8,000 = 0.175.</div></details>
<p><strong>Problem 10-12.</strong> A credit card balance of ₱10,000 grows at 3% per month with no payments. What is owed after 2 months?</p>
<details><summary>Show answer</summary><div class="warn"><strong>₱10,609.</strong> 10,000(1.03)² = 10,609. The interest in month 2 is charged on month 1's interest too.</div></details>`},
{ic:"🔐",n:"Codes",
sub:"Codes and ciphers, Roman numerals, check digits, UPC barcodes, postal codes and the Caesar cipher.",
tip:"Practice Roman numeral rules, Caesar shifts, and the ISBN-13 check digit d₁₃ = (10 − (S mod 10)) mod 10.",
r:`<h2>Codes</h2>
<h3>11.1 What is a code?</h3>
<p>A code is a system for representing information using agreed rules. A code might identify a product, location, document, or category. A cipher transforms a message according to a method, often to hide its meaning.</p>
<h3>11.2 Coding and decoding</h3>
<p>Encoding changes information into another form. Decoding reverses the process when the correct rules are known. Examples include binary numbers, barcodes, postal codes, and identification numbers.</p>
<h3>11.3 Historical examples</h3>
<p>Hieroglyphics used written signs in ancient Egypt. Roman numerals represent numbers with symbols such as I, V, X, L, C, D, and M. Labels on products use standard symbols or numbers to identify items. Musical notation represents pitch and timing.</p>
<h3>11.4 Roman numerals</h3>
<p>Main symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.</p>
<p>When a smaller value comes after a larger value, add it. VI = 6 and XV = 15. When a smaller value comes before a larger value in an allowed subtractive pair, subtract it. IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</p>
<div class="warn"><b>Example:</b> 1984 = 1000 + 900 + 80 + 4 = M + CM + LXXX + IV = MCMLXXXIV.</div>
<h3>11.5 Identification numbers and check digits</h3>
<p>Identification numbers help systems tell items apart. A check digit is calculated from the other digits and helps detect some typing or scanning errors. A valid check digit does not prove a product is genuine or a transaction is safe.</p>
<h3>11.6 Universal Product Code and barcodes</h3>
<p>A UPC barcode represents a product identifier in a machine-readable pattern. The digits identify a product within a system. A scanner reads the bars and spaces, then software looks up the related product record.</p>
<p>Do not confuse the barcode image with the full product record. The barcode generally carries an identifier, while a database stores details such as product name and price.</p>
<h3>11.7 Postal codes and money orders</h3>
<p>A postal code helps sort mail by geographic delivery area. A money order is a payment instrument with a serial or identifying number. These numbers help track and process items, but they do not replace verification procedures.</p>
<h3>11.8 Cryptography</h3>
<p>Cryptography studies methods for protecting information. Encryption transforms readable plaintext into ciphertext. Decryption turns ciphertext back into plaintext with the appropriate key. Cryptanalysis studies methods for analyzing or breaking cryptographic systems.</p>
<p>A Caesar cipher shifts each letter by a fixed number of positions. Example with a shift of 3: A becomes D, B becomes E, and C becomes F. To decrypt, shift back by 3. This is a historical learning example, not secure modern encryption.</p>
<h3>11.9 Check-digit examples</h3>
<p>Many systems use a weighted sum and a modulus to calculate a check digit. The exact weights depend on the system. Never use one system's formula for another identifier.</p>
<p>For the ISBN-13 format, multiply digits in alternating positions by 1 and 3, add the products, then choose the check digit that makes the total a multiple of 10. The formula in the supplied module expresses this using modulo 10.</p>
<p>Example structure: let S = d1 + 3d2 + d3 + 3d4 + ... + d11 + 3d12. The check digit is the number from 0 to 9 that makes S + d13 divisible by 10. Equivalently, d13 = (10 − (S mod 10)) mod 10. The final modulo step ensures a result of 0 when S already ends in 0.</p>
<h3>Quick review</h3>
<ul>
<li><p>A code represents information according to rules.</p></li>
<li><p>A cipher is designed to transform a message, often to keep it secret.</p></li>
<li><p>A check digit helps detect some errors but does not prove authenticity.</p></li>
<li><p>Use the correct check-digit weights for the identifier being checked.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 11)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 11-1. Roman numerals</h4>
<p><strong>Problem 1:</strong> Write 2,478 in Roman numerals. Break it into place values: 2,000 + 400 + 70 + 8.</p>
<div class="sol"><p>2,000 = MM; 400 = CD; 70 = LXX; 8 = VIII.</p>
<p><strong>2,478 = MMCDLXXVIII</strong></p></div>
<p><strong>Problem 2:</strong> Convert MCMXCIX to a number. Read in groups: M = 1,000; CM = 900; XC = 90; IX = 9. Total = 1,000 + 900 + 90 + 9 = <strong>1,999</strong>.</p>
<p><strong>Problem 3:</strong> Convert XCIV: XC = 90 and IV = 4, so the value is <strong>94</strong>.</p>
<h4>Example 11-2. Caesar cipher (shift cipher)</h4>
<p><strong>Encrypt "MATH" with a shift of 3.</strong> Move each letter 3 places forward: M → P, A → D, T → W, H → K.</p>
<code>Ciphertext: PDWK</code>
<p><strong>Decrypt "KHOOR" with a shift of 3.</strong> Move each letter 3 places back: K → H, H → E, O → L, O → L, R → O.</p>
<code>Plaintext: HELLO</code>
<p><strong>Wrap-around:</strong> Encrypt "STUDY" with a shift of 5. S → X, T → Y, U → Z, D → I, and Y wraps around to D (Y = 24, 24 + 5 = 29, and 29 − 26 = 3 = D).</p>
<code>Ciphertext: XYZID</code>
<h4>Example 11-3. ISBN-13 check digit</h4>
<p><strong>Problem:</strong> Find the check digit for the first 12 digits 978030640615.</p>
<table>
<thead>
<tr>
<th><strong>Digit</strong></th>
<th><strong>9</strong></th>
<th><strong>7</strong></th>
<th><strong>8</strong></th>
<th><strong>0</strong></th>
<th><strong>3</strong></th>
<th><strong>0</strong></th>
<th><strong>6</strong></th>
<th><strong>4</strong></th>
<th><strong>0</strong></th>
<th><strong>6</strong></th>
<th><strong>1</strong></th>
<th><strong>5</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Weight</td>
<td>1</td>
<td>3</td>
<td>1</td>
<td>3</td>
<td>1</td>
<td>3</td>
<td>1</td>
<td>3</td>
<td>1</td>
<td>3</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>Product</td>
<td>9</td>
<td>21</td>
<td>8</td>
<td>0</td>
<td>3</td>
<td>0</td>
<td>6</td>
<td>12</td>
<td>0</td>
<td>18</td>
<td>1</td>
<td>15</td>
</tr>
</tbody>
</table>
<div class="sol"><p>S = 9 + 21 + 8 + 0 + 3 + 0 + 6 + 12 + 0 + 18 + 1 + 15 = 93.</p>
<p><span class="mth">&lt;em&gt;d&lt;/em&gt;&lt;sub&gt;13&lt;/sub&gt; = (10 − (93 &lt;em&gt;m&lt;/em&gt;&lt;em&gt;o&lt;/em&gt;&lt;em&gt;d&lt;/em&gt; 10)) &lt;em&gt;m&lt;/em&gt;&lt;em&gt;o&lt;/em&gt;&lt;em&gt;d&lt;/em&gt; 10 = (10 − 3) &lt;em&gt;m&lt;/em&gt;&lt;em&gt;o&lt;/em&gt;&lt;em&gt;d&lt;/em&gt; 10 = 7</span></p>
<p><strong>The full number is 9780306406157.</strong></p></div>
<p><strong>Detecting an error:</strong> For 9780306406158, the check digit should be 7, not 8, so the number is invalid. It might contain a typing or scanning error.</p>
<h4>Example 11-4. UPC-A check digit (common rule)</h4>
<p>For the common UPC-A rule, multiply the digits in odd positions (1st, 3rd, ..., 11th) by 3 and the digits in even positions by 1. The check digit makes the total a multiple of 10. Use the rule given in your module if it differs.</p>
<p><strong>Problem:</strong> Find the check digit for 03600029145.</p>
<div class="sol"><p>Odd positions: 0, 6, 0, 2, 1, 5, which add to 14; 14 × 3 = 42.</p>
<p>Even positions: 3, 0, 0, 9, 4, which add to 16.</p>
<p>Total = 42 + 16 = 58. The next multiple of 10 is 60, so the check digit is 2.</p>
<p><strong>The full code is 036000291452.</strong></p></div>
<h3>Practice Problems (Module 11)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 11-1.</strong> Write in Roman numerals: (a) 1,964; (b) 3,049.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) MCMLXIV. (b) MMMXLIX.</strong> (a) 1,000 + 900 + 60 + 4 = M + CM + LX + IV. (b) 3,000 + 40 + 9 = MMM + XL + IX.</div></details>
<p><strong>Problem 11-2.</strong> Convert to numbers: (a) XLVII; (b) MDCCLXXVI; (c) CDXLIV.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 47. (b) 1,776. (c) 444.</strong> (a) XL + VII = 40 + 7. (b) M + D + CC + LXX + VI = 1,000 + 500 + 200 + 70 + 6. (c) CD + XL + IV = 400 + 40 + 4.</div></details>
<p><strong>Problem 11-3.</strong> Encrypt "CODE" using a Caesar shift of 4.</p>
<details><summary>Show answer</summary><div class="warn"><strong>GSHI.</strong> C → G, O → S, D → H, E → I.</div></details>
<p><strong>Problem 11-4.</strong> Decrypt with a shift of 3: (a) WKH; (b) ZRUOG.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) THE. (b) WORLD.</strong> Shift each letter back 3 places (for example, Z → W and G → D).</div></details>
<p><strong>Problem 11-5.</strong> Encrypt "XYZ" using a shift of 7. Show how wrap-around works.</p>
<details><summary>Show answer</summary><div class="warn"><strong>EFG.</strong> X = 23, and 23 + 7 = 30, which is 30 − 26 = 4 = E. Y becomes F and Z becomes G in the same way.</div></details>
<p><strong>Problem 11-6.</strong> Find the ISBN-13 check digit for the first 12 digits 978013110362.</p>
<details><summary>Show answer</summary><div class="warn"><strong>7.</strong> Weighted products (weights 1, 3, 1, 3, ...): 9, 21, 8, 0, 1, 9, 1, 3, 0, 9, 6, 6. S = 73. d₁₃ = (10 − (73 mod 10)) mod 10 = (10 − 3) mod 10 = 7.</div></details>
<p><strong>Problem 11-7.</strong> Is 9780306406158 a valid ISBN-13? Explain.</p>
<details><summary>Show answer</summary><div class="warn"><strong>No.</strong> The first 12 digits give S = 93, so the check digit must be 7, but the number ends in 8.</div></details>
<p><strong>Problem 11-8.</strong> Find the UPC-A check digit (common rule) for 01234567890.</p>
<details><summary>Show answer</summary><div class="warn"><strong>5.</strong> Odd positions: 0 + 2 + 4 + 6 + 8 + 0 = 20, and 20 × 3 = 60. Even positions: 1 + 3 + 5 + 7 + 9 = 25. Total = 85. The next multiple of 10 is 90, so the check digit is 5.</div></details>
<p><strong>Problem 11-9.</strong> True or false: if a product code has a valid check digit, the product must be genuine. Explain.</p>
<details><summary>Show answer</summary><div class="warn"><strong>False.</strong> A check digit only helps detect some typing or scanning errors. It does not prove a product or transaction is authentic.</div></details>`},
{ic:"🧮",n:"The Mathematical System",
sub:"Modular arithmetic, congruence properties, inverses, solving congruences and an introduction to groups.",
tip:"a ≡ b (mod m) means m divides a − b. Check gcd(a, m) for inverses and for ax ≡ b (mod m), and know the four group rules.",
r:`<h2>The Mathematical System</h2>
<h3>12.1 Modular arithmetic</h3>
<p>Modular arithmetic works with remainders. The notation a ≡ b (mod m) means a and b have the same remainder when divided by m, or equivalently m divides a − b.</p>
<div class="warn"><b>Example:</b> 17 ≡ 5 (mod 12), because 17 and 5 differ by 12 and both leave remainder 5 when divided by 12.</div>
<p>Clock arithmetic is a familiar example. On a 12-hour clock, 10 + 5 = 15, which is shown as 3. In modulo 12 notation, 15 ≡ 3 (mod 12).</p>
<h3>12.2 Properties of congruence</h3>
<ul>
<li><p>Reflexive: a ≡ a (mod m).</p></li>
<li><p>Symmetric: if a ≡ b (mod m), then b ≡ a (mod m).</p></li>
<li><p>Transitive: if a ≡ b and b ≡ c (mod m), then a ≡ c (mod m).</p></li>
<li><p>Addition: if a ≡ c and b ≡ d (mod m), then a + b ≡ c + d (mod m).</p></li>
<li><p>Multiplication: if a ≡ c and b ≡ d (mod m), then ab ≡ cd (mod m).</p></li>
</ul>
<h3>12.3 Additive and multiplicative inverses</h3>
<p>An additive inverse of a modulo m is a value b such that a + b ≡ 0 (mod m).</p>
<div class="warn"><b>Example:</b> The additive inverse of 3 modulo 7 is 4 because 3 + 4 = 7 ≡ 0 (mod 7).</div>
<p>A multiplicative inverse of a modulo m is a value b such that ab ≡ 1 (mod m). An inverse exists exactly when gcd(a,m) = 1.</p>
<div class="warn"><b>Example:</b> The inverse of 3 modulo 7 is 5 because 3 × 5 = 15 ≡ 1 (mod 7).</div>
<h3>12.4 Solving congruence equations</h3>
<p>For ax ≡ b (mod m), a solution exists exactly when gcd(a,m) divides b. If the gcd does not divide b, there is no solution.</p>
<div class="warn"><b>Example:</b> Solve 3x ≡ 6 (mod 9). gcd(3,9) = 3, and 3 divides 6, so solutions exist. Divide the congruence by 3 to get x ≡ 2 (mod 3). Modulo 9, the solutions are x ≡ 2, 5, and 8 (mod 9).</div>
<p>Example with no solution: 4x ≡ 3 (mod 8). gcd(4,8) = 4, and 4 does not divide 3, so there is no solution.</p>
<h3>12.5 Modular arithmetic in codes</h3>
<p>Modular arithmetic supports check digits, simple substitution ciphers, and many number-based systems. In a shift cipher, letters are mapped to numbers, shifted, and reduced modulo 26. A = 0, B = 1, ..., Z = 25 is one common mapping.</p>
<p>For a shift of 3, E has number 4 and becomes 4 + 3 = 7, which maps to H. Decryption subtracts 3 modulo 26.</p>
<p>Modern secure cryptography uses more advanced methods than a simple shift cipher. A basic classroom cipher is easy to break and should not protect private information.</p>
<h3>12.6 ISBN, UPC, and credit-card checks</h3>
<p>ISBN-13 uses a weighted modulo-10 check digit. UPC-A also uses a weighted modulo-10 check digit, but the weighting pattern is specific to UPC-A. Credit-card number validation commonly uses the Luhn algorithm. These methods detect some input errors but do not prove an identifier is active or valid for payment.</p>
<h3>12.7 Introduction to group theory</h3>
<p>A group is a set with one operation that follows four rules: closure, associativity, identity, and inverses.</p>
<ul>
<li><p>Closure: combining two elements from the set gives an element in the same set.</p></li>
<li><p>Associativity: (a * b) * c = a * (b * c).</p></li>
<li><p>Identity: there is an element e with e * a = a * e = a.</p></li>
<li><p>Inverse: every element a has an element a⁻¹ with a * a⁻¹ = a⁻¹ * a = e.</p></li>
</ul>
<div class="warn"><b>Example:</b> The integers under addition form a group. Adding two integers gives an integer, addition is associative, 0 is the identity, and the inverse of a is −a.</div>
<p>The integers under multiplication do not form a group because most integers do not have integer multiplicative inverses. For example, 2 has no integer inverse that multiplies by 2 to give 1.</p>
<p>A finite group has a finite number of elements.</p>
<h3>Quick review</h3>
<ul>
<li><p>a ≡ b (mod m) means m divides a − b.</p></li>
<li><p>The additive inverse of a modulo m cancels a to remainder 0.</p></li>
<li><p>A multiplicative inverse exists exactly when the number and modulus are relatively prime.</p></li>
<li><p>A congruence ax ≡ b (mod m) has a solution if and only if gcd(a,m) divides b.</p></li>
<li><p>A group needs closure, associativity, an identity, and inverses.</p></li>
</ul>
<h3>Problem-Solving Examples (Module 12)</h3>
<p>Study each worked example, then cover the solution and try to redo it before reading the steps.</p>
<h4>Example 12-1. Reduce modulo m and test congruence</h4>
<div class="sol"><p>47 mod 6: 47 = 7(6) + 5, so 47 ≡ 5 (mod 6).</p>
<p>−3 mod 7: add 7 to get a value from 0 to 6, so −3 ≡ 4 (mod 7).</p>
<p>100 mod 12: 100 = 8(12) + 4, so 100 ≡ 4 (mod 12).</p>
<p>Is 83 ≡ 23 (mod 10)? 83 − 23 = 60, and 10 divides 60, so <strong>yes</strong>.</p>
<p>Is 41 ≡ 7 (mod 6)? 41 − 7 = 34, and 6 does not divide 34, so <strong>no</strong>.</p></div>
<h4>Example 12-2. Clock and calendar problems</h4>
<div class="sol"><p>It is 9 o'clock. What time is it 20 hours later? 9 + 20 = 29, and 29 mod 12 = 5, so it is <strong>5 o'clock</strong> (use the AM/PM change to say which one).</p>
<p>Today is Wednesday. What day is it 100 days later? 100 mod 7 = 2, so move 2 days forward: <strong>Friday</strong>.</p></div>
<h4>Example 12-3. Arithmetic in modular form</h4>
<p><strong>Problem:</strong> Find (23 × 17) mod 5.</p>
<div class="sol"><p>Reduce first: 23 ≡ 3 and 17 ≡ 2 (mod 5). Then 3 × 2 = 6 ≡ 1 (mod 5).</p>
<div class="warn"><b>Check:</b> 23 × 17 = 391, and 391 = 78(5) + 1. ✓</div></div>
<p>Addition works the same way: (14 + 29) mod 6 = (2 + 5) mod 6 = 7 mod 6 = 1.</p>
<h4>Example 12-4. Additive and multiplicative inverses</h4>
<div class="sol"><p>The additive inverse of 9 modulo 11 is 2, because 9 + 2 = 11 ≡ 0.</p>
<p>The multiplicative inverse of 4 modulo 9: try 4 × 1, 4 × 2, ... until the product is 1 more than a multiple of 9. 4 × 7 = 28 = 3(9) + 1, so the inverse is <strong>7</strong>.</p>
<p>Does 6 have an inverse modulo 9? gcd(6, 9) = 3, which is not 1, so <strong>no inverse exists</strong>.</p>
<p>The inverse of 5 modulo 7 is 3, because 5 × 3 = 15 = 2(7) + 1.</p></div>
<h4>Example 12-5. Solving congruence equations</h4>
<p><strong>(a) Solve 5x ≡ 3 (mod 7).</strong> gcd(5, 7) = 1, so there is exactly one solution modulo 7. The inverse of 5 is 3. Multiply both sides by 3: x ≡ 9 ≡ 2 (mod 7). Check: 5 × 2 = 10 ≡ 3. ✓</p>
<p><strong>(b) Solve 6x ≡ 4 (mod 10).</strong> gcd(6, 10) = 2, and 2 divides 4, so solutions exist. Divide everything (including the modulus) by 2: 3x ≡ 2 (mod 5). The inverse of 3 modulo 5 is 2, so x ≡ 4 (mod 5). Modulo 10 the solutions are x ≡ 4 and x ≡ 9. Check: 6 × 4 = 24 ≡ 4 and 6 × 9 = 54 ≡ 4. ✓</p>
<p><strong>(c) Solve 6x ≡ 5 (mod 9).</strong> gcd(6, 9) = 3, and 3 does not divide 5, so there is <strong>no solution</strong>.</p>
<h4>Example 12-6. Shift cipher using modular arithmetic</h4>
<p><strong>Problem:</strong> Encrypt "HELP" with a shift of 5, using A = 0, B = 1, ..., Z = 25 and the rule <span class="mth">&lt;em&gt;C&lt;/em&gt; = (&lt;em&gt;P&lt;/em&gt; + 5) &lt;em&gt;m&lt;/em&gt;&lt;em&gt;o&lt;/em&gt;&lt;em&gt;d&lt;/em&gt; 26</span>.</p>
<table>
<thead>
<tr>
<th><strong>Letter</strong></th>
<th><strong>H</strong></th>
<th><strong>E</strong></th>
<th><strong>L</strong></th>
<th><strong>P</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>P (number)</td>
<td>7</td>
<td>4</td>
<td>11</td>
<td>15</td>
</tr>
<tr>
<td>(P + 5) mod 26</td>
<td>12</td>
<td>9</td>
<td>16</td>
<td>20</td>
</tr>
<tr>
<td>Cipher letter</td>
<td>M</td>
<td>J</td>
<td>Q</td>
<td>U</td>
</tr>
</tbody>
</table>
<code>Ciphertext: MJQU. To decrypt, use P = (C − 5) mod 26.</code>
<h4>Example 12-7. Luhn check for credit-card numbers</h4>
<p><strong>Rule:</strong> Starting from the rightmost digit (position 0), double every digit in an odd position. If a doubled digit is more than 9, subtract 9. Add all the digits. The number passes if the total is a multiple of 10.</p>
<p><strong>Problem:</strong> Does 79927398713 pass the Luhn check?</p>
<table>
<thead>
<tr>
<th><strong>Digits (right to left)</strong></th>
<th><strong>3</strong></th>
<th><strong>1</strong></th>
<th><strong>7</strong></th>
<th><strong>8</strong></th>
<th><strong>9</strong></th>
<th><strong>3</strong></th>
<th><strong>7</strong></th>
<th><strong>2</strong></th>
<th><strong>9</strong></th>
<th><strong>9</strong></th>
<th><strong>7</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Doubled? (odd positions)</td>
<td>no</td>
<td>yes</td>
<td>no</td>
<td>yes</td>
<td>no</td>
<td>yes</td>
<td>no</td>
<td>yes</td>
<td>no</td>
<td>yes</td>
<td>no</td>
</tr>
<tr>
<td>Value used</td>
<td>3</td>
<td>2</td>
<td>7</td>
<td>7</td>
<td>9</td>
<td>6</td>
<td>7</td>
<td>4</td>
<td>9</td>
<td>9</td>
<td>7</td>
</tr>
</tbody>
</table>
<div class="sol"><p>Doubled values: 1 × 2 = 2; 8 × 2 = 16, and 16 − 9 = 7; 3 × 2 = 6; 2 × 2 = 4; 9 × 2 = 18, and 18 − 9 = 9.</p>
<p>Total = 3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70, which is a multiple of 10. The number <strong>passes</strong>. (Passing does not mean the card is real or active.)</p></div>
<h4>Example 12-8. Is it a group?</h4>
<div class="sol"><p>{0, 1, 2, 3} under addition modulo 4: closed; associative; identity 0; inverses 0 ↔︎ 0, 1 ↔︎ 3, 2 ↔︎ 2. <strong>It is a group.</strong></p>
<p>{1, 2, 3, 4} under multiplication modulo 5: closed (for example, 2 × 3 = 6 ≡ 1 and 3 × 4 = 12 ≡ 2); identity 1; inverses 1 ↔︎ 1, 2 ↔︎ 3, 4 ↔︎ 4. <strong>It is a group.</strong></p>
<p>{0, 1, 2, 3} under multiplication modulo 4: 0 has no inverse, and 2 has no inverse because 2 × anything is 0 or 2 (mod 4). <strong>Not a group.</strong></p>
<p>{1, 2, 3, 4, 5} under multiplication modulo 6: 2 × 3 = 6 ≡ 0, which is not in the set, so closure fails. <strong>Not a group.</strong></p></div>
<h3>Practice Problems (Module 12)</h3>
<p>Try these on your own first. Tap <b>Show answer</b> under any problem to check your work and read the short solution.</p>
<p><strong>Problem 12-1.</strong> Reduce: (a) 125 mod 8; (b) −10 mod 7; (c) 1,000 mod 9.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 5. (b) 4. (c) 1.</strong> (a) 125 = 15(8) + 5. (b) −10 + 14 = 4. (c) 1,000 = 111(9) + 1.</div></details>
<p><strong>Problem 12-2.</strong> Are these congruent? (a) 58 ≡ 13 (mod 9); (b) 75 ≡ 22 (mod 8).</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Yes. (b) No.</strong> (a) 58 − 13 = 45 and 9 divides 45. (b) 75 − 22 = 53 and 8 does not divide 53.</div></details>
<p><strong>Problem 12-3.</strong> It is 8 o'clock in the evening. What time is it 50 hours later? If today is Monday, what day is it 45 days later?</p>
<details><summary>Show answer</summary><div class="warn"><strong>10 o'clock in the evening, and Thursday.</strong> 8 + 50 = 58 and 58 mod 12 = 10; 50 hours is 2 days and 2 hours, so the time of day is 10 pm. 45 mod 7 = 3, and Monday + 3 days = Thursday.</div></details>
<p><strong>Problem 12-4.</strong> Compute: (a) (37 × 12) mod 7; (b) (58 + 79) mod 9.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 3. (b) 2.</strong> (a) 37 ≡ 2 and 12 ≡ 5 (mod 7), so 2 × 5 = 10 ≡ 3. (b) 58 ≡ 4 and 79 ≡ 7 (mod 9), so 4 + 7 = 11 ≡ 2.</div></details>
<p><strong>Problem 12-5.</strong> Find the additive inverse: (a) 6 modulo 11; (b) 0 modulo 9; (c) 5 modulo 8.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 5. (b) 0. (c) 3.</strong> In each case the sum is 0 modulo the modulus.</div></details>
<p><strong>Problem 12-6.</strong> Find the multiplicative inverse: (a) 2 modulo 9; (b) 7 modulo 11.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) 5. (b) 8.</strong> (a) 2 × 5 = 10 ≡ 1. (b) 7 × 8 = 56 = 5(11) + 1.</div></details>
<p><strong>Problem 12-7.</strong> Does an inverse exist? Find it if it does. (a) 4 modulo 10; (b) 7 modulo 10.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) No</strong> (gcd(4, 10) = 2). <strong>(b) Yes, 3</strong> (7 × 3 = 21 ≡ 1; gcd(7, 10) = 1).</div></details>
<p><strong>Problem 12-8.</strong> Solve 3x ≡ 5 (mod 8).</p>
<details><summary>Show answer</summary><div class="warn"><strong>x ≡ 7 (mod 8).</strong> The inverse of 3 modulo 8 is 3 (3 × 3 = 9 ≡ 1). Multiply: x ≡ 15 ≡ 7. Check: 3 × 7 = 21 ≡ 5.</div></details>
<p><strong>Problem 12-9.</strong> Solve 4x ≡ 6 (mod 10).</p>
<details><summary>Show answer</summary><div class="warn"><strong>x ≡ 4 or 9 (mod 10).</strong> gcd(4, 10) = 2 divides 6. Divide by 2: 2x ≡ 3 (mod 5). The inverse of 2 modulo 5 is 3, so x ≡ 9 ≡ 4 (mod 5). Modulo 10: x = 4 and 9. Check: 16 ≡ 6 and 36 ≡ 6.</div></details>
<p><strong>Problem 12-10.</strong> Solve 6x ≡ 9 (mod 12). Explain your answer.</p>
<details><summary>Show answer</summary><div class="warn"><strong>No solution.</strong> gcd(6, 12) = 6, and 6 does not divide 9.</div></details>
<p><strong>Problem 12-11.</strong> Using A = 0, ..., Z = 25: (a) encrypt "MATH" with a shift of 10; (b) decrypt "DRO" with a shift of 10.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) WKDR. (b) THE.</strong> (a) M = 12 → 22 (W); A = 0 → 10 (K); T = 19 → 29 ≡ 3 (D); H = 7 → 17 (R). (b) D = 3 − 10 = −7 ≡ 19 (T); R = 17 − 10 = 7 (H); O = 14 − 10 = 4 (E).</div></details>
<p><strong>Problem 12-12.</strong> Does 4111111111111111 pass the Luhn check? What about 4111111111111112?</p>
<details><summary>Show answer</summary><div class="warn"><strong>The first passes; the second fails.</strong> In 4111111111111111 the leading 4 is in an odd position, so it doubles to 8. The seven other doubled 1s give 7 × 2 = 14, and the eight undoubled 1s add 8. Total = 8 + 14 + 8 = 30, a multiple of 10. Changing the last digit to 2 makes the total 31, which fails.</div></details>
<p><strong>Problem 12-13.</strong> Is each a group? (a) {0, 1, 2, 3, 4} under addition mod 5; (b) {1, 2, 3} under multiplication mod 4; (c) the integers under subtraction; (d) the even integers under addition.</p>
<details><summary>Show answer</summary><div class="warn"><strong>(a) Yes. (b) No</strong> (2 × 2 = 4 ≡ 0 is not in the set, so closure fails). <strong>(c) No</strong> (subtraction is not associative: (5 − 3) − 1 = 1, but 5 − (3 − 1) = 3). <strong>(d) Yes</strong> (closed, associative, identity 0, inverse of a is −a).</div></details>`}
];

/* ===== BONUS REVIEWER PAGES ===== */
const EXTRA=[
{ic:'📐',n:'Formula Sheet',sub:'Every key formula from the reviewer on one page.',r:`<h2>Formula Sheet</h2>
<h3>Key formulas</h3>
<p>Write the formula first, substitute the values, calculate, then label the final answer.</p>
<code>Mean: x̄ = Σx/n</code><br>
<code>Range: maximum − minimum</code><br>
<code>IQR: Q3 − Q1</code><br>
<code>z-score: z = (x − μ)/σ</code><br>
<code>Probability complement: P(Aᶜ) = 1 − P(A)</code><br>
<code>Bayes: P(A|B) = P(B|A)P(A)/P(B)</code><br>
<code>Binomial: P(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ</code><br>
<code>Regression line: ŷ = a + bx</code><br>
<code>Planar graph: V − E + F = 2</code><br>
<code>Standard divisor: total population / total seats</code><br>
<code>Simple interest: I = Prt</code><br>
<code>Simple-interest future value: A = P(1 + rt)</code><br>
<code>Compound interest: A = P(1 + r/m)^(mt)</code><br>
<code>Loan payment: PMT = Pi/[1 − (1+i)^(-n)]</code><br>
<code>Modular inverse: ab ≡ 1 (mod m)</code><br>
<code>ISBN-13 check digit: d13 = (10 − (S mod 10)) mod 10, where S uses alternating weights 1 and 3.</code>`},
{ic:'📝',n:'Practice Questions & Answer Key',sub:'25 practice questions with short explanations.',r:`<h2>Practice Questions &amp; Answer Key</h2>
<h3>Try them first</h3>
<p>Solve each question on paper before opening the answer.</p>
<ol><li>Find the next Fibonacci term: 5, 8, 13, 21, __.<details><summary>Show answer</summary><div class="warn">34. Add 13 + 21.</div></details></li><li>Translate: seven less than twice x.<details><summary>Show answer</summary><div class="warn">2x − 7.</div></details></li><li>If U = {1,2,3,4,5,6} and A = {2,4,6}, find Aᶜ.<details><summary>Show answer</summary><div class="warn">{1,3,5}. These are the elements in U that are not in A.</div></details></li><li>Is f(x) = x² a function?<details><summary>Show answer</summary><div class="warn">Yes. Every input x has exactly one output x².</div></details></li><li>Is the conclusion '12 is even' valid from the premises 'all multiples of 4 are even' and '12 is a multiple of 4'?<details><summary>Show answer</summary><div class="warn">Yes. The premises support the conclusion.</div></details></li><li>Find the mean of 4, 6, 8, 10.<details><summary>Show answer</summary><div class="warn">(4 + 6 + 8 + 10)/4 = 7.</div></details></li><li>Find the median of 2, 5, 9, 12, 20.<details><summary>Show answer</summary><div class="warn">9, the middle value after ordering.</div></details></li><li>Find the range of 3, 7, 11, 15.<details><summary>Show answer</summary><div class="warn">15 − 3 = 12.</div></details></li><li>Find the z-score for x = 85, mean = 75, standard deviation = 5.<details><summary>Show answer</summary><div class="warn">z = (85 − 75)/5 = 2.</div></details></li><li>A fair die is rolled. Find P(rolling an even number).<details><summary>Show answer</summary><div class="warn">3/6 = 1/2, since the even results are 2, 4, and 6.</div></details></li><li>A graph has four connected vertices with degrees 2, 2, 4, 2. Does it have an Euler circuit?<details><summary>Show answer</summary><div class="warn">Yes, if the graph is connected and all vertices have even degree.</div></details></li><li>What is the main difference between an Euler path and a Hamilton path?<details><summary>Show answer</summary><div class="warn">Euler uses every edge exactly once. Hamilton visits every vertex exactly once.</div></details></li><li>A connected planar graph has V = 8 and E = 12. Find F.<details><summary>Show answer</summary><div class="warn">F = 2 − V + E = 2 − 8 + 12 = 6.</div></details></li><li>Maximize Z = 2x + y at the feasible corner points (0,0), (4,0), (2,3), and (0,4).<details><summary>Show answer</summary><div class="warn">Values: (0,0) gives 0, (4,0) gives 8, (2,3) gives 7, (0,4) gives 4. Maximum is 8 at (4,0).</div></details></li><li>When is p → q false?<details><summary>Show answer</summary><div class="warn">Only when p is true and q is false.</div></details></li><li>Negate: Every student submitted the activity.<details><summary>Show answer</summary><div class="warn">At least one student did not submit the activity.</div></details></li><li>Three candidates receive 45, 35, and 20 votes. Who wins by plurality?<details><summary>Show answer</summary><div class="warn">The candidate with 45 votes. This is the highest total, even though it is not a majority of all 100 votes.</div></details></li><li>Find the standard divisor for a population of 24,000 and 12 seats.<details><summary>Show answer</summary><div class="warn">24,000/12 = 2,000 people per seat.</div></details></li><li>Find simple interest on ₱5,000 at 4% yearly for 3 years.<details><summary>Show answer</summary><div class="warn">I = 5,000(0.04)(3) = ₱600.</div></details></li><li>Find the future value of ₱2,000 at 5% compounded annually for 2 years.<details><summary>Show answer</summary><div class="warn">A = 2,000(1.05)² = ₱2,205.</div></details></li><li>Convert 49 to Roman numerals.<details><summary>Show answer</summary><div class="warn">XLIX.</div></details></li><li>Find the additive inverse of 5 modulo 8.<details><summary>Show answer</summary><div class="warn">3, because 5 + 3 = 8 ≡ 0 (mod 8).</div></details></li><li>Find the inverse of 3 modulo 7.<details><summary>Show answer</summary><div class="warn">5, because 3 × 5 = 15 ≡ 1 (mod 7).</div></details></li><li>Does 4x ≡ 2 (mod 6) have a solution? Use the gcd rule.<details><summary>Show answer</summary><div class="warn">Yes. gcd(4,6) = 2, and 2 divides 2. Divide by 2 to get 2x ≡ 1 (mod 3), whose solution is x ≡ 2 (mod 3).</div></details></li><li>Name the four group properties.<details><summary>Show answer</summary><div class="warn">Closure, associativity, identity, and inverses.</div></details></li></ol>
<h3>References for further study</h3>
<ul><li>OpenStax, Contemporary Mathematics, Math and Art, including the Fibonacci sequence and golden ratio: <a href="https://openstax.org/books/contemporary-mathematics/pages/13-1-math-and-art" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/13-1-math-and-art</a></li><li>OpenStax, Contemporary Mathematics, Truth Tables and Logic Key Concepts: <a href="https://openstax.org/books/contemporary-mathematics/pages/2-key-concepts" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/2-key-concepts</a></li><li>OpenStax, Contemporary Mathematics, Logical Arguments: <a href="https://openstax.org/books/contemporary-mathematics/pages/2-7-logical-arguments" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/2-7-logical-arguments</a></li><li>OpenStax, Contemporary Mathematics, Graph Theory Key Concepts: <a href="https://openstax.org/books/contemporary-mathematics/pages/12-key-concepts" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/12-key-concepts</a></li><li>OpenStax, Contemporary Mathematics, Euler Circuits: <a href="https://openstax.org/books/contemporary-mathematics/pages/12-5-euler-circuits" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/12-5-euler-circuits</a></li><li>OpenStax, Contemporary Mathematics, Scatter Plots, Correlation, and Regression Lines: <a href="https://openstax.org/books/contemporary-mathematics/pages/8-8-scatter-plots-correlation-and-regression-lines" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/8-8-scatter-plots-correlation-and-regression-lines</a></li><li>OpenStax, Contemporary Mathematics, Voting and Apportionment Key Concepts: <a href="https://openstax.org/books/contemporary-mathematics/pages/11-key-concepts" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/11-key-concepts</a></li><li>OpenStax, Contemporary Mathematics, Simple Interest: <a href="https://openstax.org/books/contemporary-mathematics/pages/6-3-simple-interest" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/6-3-simple-interest</a></li><li>OpenStax, Contemporary Mathematics, Compound Interest: <a href="https://openstax.org/books/contemporary-mathematics/pages/6-4-compound-interest" target="_blank" rel="noopener">https://openstax.org/books/contemporary-mathematics/pages/6-4-compound-interest</a></li><li>OpenStax, Principles of Finance 2e, Time Value of Money Basics: <a href="https://openstax.org/books/principles-finance-2e/pages/7-2-time-value-of-money-tvm-basics" target="_blank" rel="noopener">https://openstax.org/books/principles-finance-2e/pages/7-2-time-value-of-money-tvm-basics</a></li></ul>`}
];

/* ===== QUESTION BANK: Q[topic][tier] = [question, [options], correctIndex] ===== */
const Q=[
/* 1. Nature of Mathematics */
[[["Mathematics studies quantity, shape, pattern, structure, order, and…",["Relationships","Luck","Colors","Rumors"],0],
  ["A weather forecast is best described as…",["An estimate, not a guarantee","A guaranteed fact","A random guess","A permanent record"],0],
  ["In the Fibonacci sequence, each term after the first two equals…",["The sum of the previous two terms","Double the previous term","The previous term plus 1","The product of the previous two"],0],
  ["The golden ratio is approximately…",["1.618","1.414","3.142","2.718"],0]],
 [["With F₁ = 1 and F₂ = 1, what is F₈?",["13","21","34","8"],1],
  ["A rectangle has a long side of 16.18 cm and a short side of 10 cm. Long ÷ short is about…",["1.618","1.5","2.0","0.618"],0],
  ["A Fibonacci rectangle is built from adjoining squares whose side lengths are…",["Fibonacci numbers","Even numbers","Prime numbers","Perfect cubes"],0],
  ["Which statement about the golden ratio is correct?",["Check the actual measurements before claiming it","Every beautiful object follows it exactly","Every natural object follows it exactly","It equals exactly 1.6"],0]],
 [["Next term: 13, 21, 34, 55, …",["76","89","110","144"],1],
  ["A mathematical model's results depend on…",["The data and assumptions used","Only the final answer","The color of the graph","Nothing at all"],0],
  ["A golden rectangle has a short side of 20 cm. Its long side is about…",["32.4 cm","30 cm","36.2 cm","12.4 cm"],0],
  ["In 1, 1, 2, 3, 5, 8, 13, the sum 5 + 8 gives which term?",["13","11","16","21"],0]],
 [["With F₁ = 1 and F₂ = 1, what is F₁₀?",["34","55","89","44"],1],
  ["F₉ = 34 and F₁₀ = 55. What is F₁₂?",["89","110","144","233"],2],
  ["A quarter-circle drawn in each square of a Fibonacci rectangle creates…",["An approximate spiral","A perfect natural law","A straight line","A triangle"],0],
  ["The ratio 55 ÷ 34 is closest to…",["1.618","1.0","2.0","3.0"],0]]],
/* 2. Mathematical Language & Symbols */
[[["\"Seven less than a number x\" is written…",["x − 7","7 − x","7x","x + 7"],0],
  ["A set is a…",["Well-defined collection of objects","Single number","Type of equation","Kind of graph"],0],
  ["A proposition is a statement that is…",["Either true or false","A question","A command","Always true"],0],
  ["Which symbol means \"is an element of\"?",["∈","∉","⊆","∪"],0]],
 [["\"Five less than twice x\" is written…",["2x − 5","5 − 2x","2(x − 5)","5x − 2"],0],
  ["U = {1, 2, 3, 4, 5} and A = {1, 3, 5}. What is the complement of A?",["{2, 4}","{1, 3, 5}","{1, 2, 3, 4, 5}","∅"],0],
  ["Sets that have the same number of elements are called…",["Equivalent sets","Equal sets","Unit sets","Empty sets"],0],
  ["If f(x) = 2x + 1, then f(3) = ?",["7","6","5","9"],0]],
 [["Which mapping is NOT a function?",["{(1,a), (1,b), (2,c)}","{(1,a), (2,a), (3,b)}","{(1,5), (2,5), (3,5)}","{(1,2), (2,4), (3,6)}"],0],
  ["Whole numbers are NOT closed under…",["Subtraction","Addition","Multiplication","All of these"],0],
  ["\"A number is at most 10\" is written…",["x ≤ 10","x ≥ 10","x < 10","x ≠ 10"],0],
  ["Which of these is NOT a proposition?",["Close the door.","7 is greater than 3.","12 is an even number.","5 + 2 = 9"],0]],
 [["A = {2, 4, 6, 8} and B = {4, 8, 12}. What is A ∩ B?",["{4, 8}","{2, 4, 6, 8, 12}","{12}","{2, 6}"],0],
  ["A = {1, 2, 3} and B = {3, 4}. What is A ∪ B?",["{1, 2, 3, 4}","{3}","{1, 2, 3, 3, 4}","{4}"],0],
  ["\"Seven minus a number\" is written…",["7 − x","x − 7","7x","x / 7"],0],
  ["Which statement uses an existential idea?",["There is an integer greater than 100.","Every even integer is divisible by 2.","All squares have four sides.","Every student passed."],0]]],
/* 3. Problem Solving & Reasoning */
[[["What is the first step of the problem-solving plan?",["Understand the problem","Carry out the plan","Check the result","Guess an answer"],0],
  ["Reasoning from examples to a general rule is called…",["Inductive reasoning","Deductive reasoning","Circular reasoning","Random reasoning"],0],
  ["Reasoning from a general rule to a specific case is called…",["Deductive reasoning","Inductive reasoning","Hasty reasoning","Visual reasoning"],0],
  ["What is the last step of the problem-solving plan?",["Check the result","Understand the problem","Choose a plan","Draw a diagram"],0]],
 [["A notebook costs ₱35 and you have ₱200. How much remains after buying 3 notebooks?",["₱95","₱105","₱165","₱75"],0],
  ["Next number: 2, 4, 6, 8, …",["10","12","9","16"],0],
  ["All multiples of 4 are even. 28 is a multiple of 4. Therefore, 28 is…",["Even","Odd","Prime","Negative"],0],
  ["Drawing a broad conclusion from too few examples is called…",["Hasty generalization","Valid deduction","A counterexample","A premise"],0]],
 [["Two things change together. Does that prove one causes the other?",["No, correlation is not causation","Yes, always","Only on weekdays","Only if the numbers are large"],0],
  ["How many valid counterexamples disprove a universal claim?",["One","Two","Ten","One hundred"],0],
  ["A notebook costs ₱35 and a pen ₱12. Total for 4 notebooks and 3 pens?",["₱176","₱152","₱188","₱140"],0],
  ["Next number: 3, 6, 12, 24, …",["48","36","30","27"],0]],
 [["What is the 8th term of 1, 4, 9, 16, 25, …?",["64","49","81","56"],0],
  ["What is the 10th term of 5, 8, 11, 14, …?",["32","35","29","30"],0],
  ["All birds have feathers. A penguin is a bird. Which conclusion is valid?",["A penguin has feathers","A penguin can fly","All feathered animals are penguins","A penguin is not a bird"],0],
  ["Working backward: a number is increased by 7, then doubled, giving 30. What was the number?",["8","15","7","11"],0]]],
/* 4. Data Management */
[[["A numerical description of a population is a…",["Parameter","Statistic","Sample","Frequency"],0],
  ["A numerical description calculated from a sample is a…",["Statistic","Parameter","Population","Variable"],0],
  ["Data made of labels or categories is…",["Qualitative","Quantitative","Numeric","Continuous"],0],
  ["The value that occurs most often is the…",["Mode","Mean","Median","Range"],0]],
 [["What is the mean of 2, 4, 6, 8?",["5","4","6","20"],0],
  ["What is the median of 3, 5, 7, 9?",["6","5","7","8"],0],
  ["What is the range of 3, 7, 11, 15?",["12","15","8","11"],0],
  ["Choose a random start, then select every kth member. Which sampling method?",["Systematic","Stratified","Cluster","Convenience"],0]],
 [["Mean = 70 and standard deviation = 5. What is the z-score of 80?",["2","1","−2","16"],0],
  ["What is the median of 2, 5, 9, 12, 20?",["9","5","12","10.8"],0],
  ["Q1 = 20 and Q3 = 50. What is the upper fence, Q3 + 1.5(IQR)?",["95","75","65","80"],0],
  ["For ŷ = 12 + 3x, what does the model predict when x = 4?",["24","15","19","48"],0]],
 [["1% of a group has a condition. The test is positive for 90% of those with it and 5% of those without. After a positive result, the chance of having the condition is about…",["15.4%","90%","1%","50%"],0],
  ["X = 0 with probability 0.25 and X = 2 with probability 0.75. What is E(X)?",["1.5","1","2","0.75"],0],
  ["Sample variance of 4, 8, 6, 5, 7 (mean 6, n = 5)?",["2.5","2","10","1.581"],0],
  ["A binomial model has n = 3 trials and p = 0.5. What is P(X = 2)?",["0.375","0.25","0.5","0.125"],0]]],
/* 5. The Mathematics of Graphs */
[[["A point or node in a graph is called a…",["Vertex","Edge","Face","Loop"],0],
  ["An Euler path uses every ___ exactly once.",["Edge","Vertex","Face","Color"],0],
  ["A Hamilton path visits every ___ exactly once.",["Vertex","Edge","Face","Weight"],0],
  ["In the Konigsberg Bridge Problem, Euler represented land areas as…",["Vertices, with bridges as edges","Edges, with bridges as vertices","Faces, with bridges as loops","Colors, with bridges as weights"],0]],
 [["A connected graph has vertex degrees 2, 2, 4, 2. Does it have an Euler circuit?",["Yes, all degrees are even","No, it has odd degrees","Only a Hamilton circuit","Cannot tell"],0],
  ["A connected planar graph has V = 6 and E = 9. How many faces?",["5","4","6","17"],0],
  ["A connected graph has an Euler path (not a circuit) when exactly how many vertices have odd degree?",["2","0","1","4"],0],
  ["The nearest-neighbor algorithm gives…",["A quick route that is not always the shortest","Always the shortest route","Every possible route","A route that must be a circuit of cost 0"],0]],
 [["A connected planar graph has V = 8 and E = 12. How many faces?",["6","4","8","22"],0],
  ["What is the chromatic number of a triangle (three mutually joined vertices)?",["3","2","4","1"],0],
  ["The Four Color Theorem says every planar map needs no more than ___ colors.",["4","3","5","2"],0],
  ["In the cheapest link algorithm, a cheap edge is skipped if it…",["Gives a vertex degree greater than 2 or closes a small circuit too early","Has the lowest weight","Touches the starting vertex","Is the last edge"],0]],
 [["A connected graph has degrees 3, 3, 2, 2. What exists?",["An Euler path but no Euler circuit","An Euler circuit","Neither","Both"],0],
  ["A connected graph has degrees 3, 3, 3, 3. What exists?",["Neither an Euler path nor an Euler circuit","An Euler circuit","An Euler path only","A planar face"],0],
  ["Why is the brute force method impractical for many vertices?",["The number of routes grows very quickly","It never finds the best route","It ignores weights","It needs colors"],0],
  ["A graph is 2-colorable exactly when it…",["Has no odd cycle (is bipartite)","Has a triangle","Has every degree even","Is planar"],0]]],
/* 6. Linear Programming */
[[["Linear programming finds the best value of a linear…",["Objective function","Triangle","Fraction","Sentence"],0],
  ["The area satisfying every constraint is the…",["Feasible region","Objective row","Slack zone","Origin"],0],
  ["A solid boundary line is used for…",["≤ or ≥","< or >","= only","≠"],0],
  ["A dashed boundary line is used for…",["< or >","≤ or ≥","≤ only","≥ only"],0]],
 [["Maximize Z = 3x + 2y at corner points (0,0), (2,0), (2,2), (0,4). What is the maximum Z?",["10","8","6","0"],0],
  ["Where is the best objective value found in the graphical method?",["At a corner point of the feasible region","At the center of the region","Outside the region","At random"],0],
  ["A slack variable turns x + y ≤ 4 into…",["x + y + s₁ = 4","x + y − s₁ = 4","x + y = s₁","x + y ≥ 4"],0],
  ["Why test a point such as (0,0) for an inequality?",["To decide which side to shade","To find the maximum","To make the line dashed","To find the slack"],0]],
 [["Maximize Z = 2x + y at corners (0,0), (4,0), (2,3), (0,4). What is the maximum?",["8","7","4","6"],0],
  ["Minimize C = 5x + 3y at corners (1,4), (3,2), (6,1). What is the minimum?",["17","21","33","12"],0],
  ["A common mistake in linear programming is forgetting…",["The non-negativity restrictions x ≥ 0 and y ≥ 0","To draw the axes in color","To use a ruler","To round"],0],
  ["The simplex method moves from one ___ to another while improving the objective.",["Corner point","Slack variable","Boundary line","Constant"],0]],
 [["Maximize Z = 4x + 3y at corners (0,0), (3,0), (2,2), (0,3). What is the maximum?",["14","12","9","7"],0],
  ["Which point satisfies both 2x + y ≤ 8 and x + y ≤ 4?",["(1, 2)","(3, 3)","(4, 1)","(0, 5)"],0],
  ["For the constraint x ≤ 2, the slack form is…",["x + s₂ = 2","x − s₂ = 2","x = s₂","x + 2 = s₂"],0],
  ["A complete answer to a maximization problem states…",["The maximum value and the values of the decision variables","Only the maximum value","Only the corner points","Only the constraints"],0]]],
/* 7. Logic */
[[["p ∧ q is true only when…",["Both p and q are true","Either is true","Both are false","p is false"],0],
  ["The inclusive OR, p ∨ q, is false only when…",["Both p and q are false","Both are true","p is true","q is true"],0],
  ["p → q is false only when…",["p is true and q is false","p is false and q is true","Both are false","Both are true"],0],
  ["How many rows does a full truth table for 3 propositions have?",["8","6","4","9"],0]],
 [["The contrapositive of p → q is…",["¬q → ¬p","q → p","¬p → ¬q","p ∧ ¬q"],0],
  ["The converse of p → q is…",["q → p","¬q → ¬p","¬p → ¬q","p ∨ q"],0],
  ["The negation of \"Every student passed\" is…",["At least one student did not pass","No student passed","Every student failed","One student passed"],0],
  ["By De Morgan's law, ¬(p ∧ q) is equivalent to…",["¬p ∨ ¬q","¬p ∧ ¬q","p ∨ q","¬p → q"],0]],
 [["The negation of \"I studied and I passed\" is…",["I did not study or I did not pass","I did not study and I did not pass","I studied or I passed","I studied and I did not pass"],0],
  ["A statement that is always true is a…",["Tautology","Contradiction","Converse","Premise"],0],
  ["p → q is logically equivalent to its…",["Contrapositive","Converse","Inverse","Negation"],0],
  ["Law of detachment: if p → q is true and p is true, then…",["q follows","p is false","q is false","Nothing follows"],0]],
 [["An argument that is valid and has true premises is called…",["Sound","Tautological","Contradictory","Inverse"],0],
  ["If p is true and q is false, what is the truth value of p ↔ q?",["False","True","Cannot tell","Both"],0],
  ["How many rows does a full truth table for 4 propositions have?",["16","8","12","32"],0],
  ["The converse and inverse of p → q are…",["Equivalent to each other, but not always to p → q","Always equivalent to p → q","Never equivalent","The same as the contrapositive"],0]]],
/* 8. Apportionment & Voting */
[[["Apportionment allocates a fixed number of ___ among groups.",["Seats","Votes","Ballots","Candidates"],0],
  ["Under plurality, the winner is the candidate with…",["The most votes","More than half the votes","The most second-place votes","The fewest votes"],0],
  ["A majority means…",["More than half of the votes","The most votes","At least one vote","Exactly half"],0],
  ["Standard divisor equals…",["Total population ÷ total seats","Total seats ÷ total population","Group population × seats","Seats ÷ 2"],0]],
 [["A population of 24,000 has 12 seats. What is the standard divisor?",["2,000","200","12,000","288,000"],0],
  ["Populations 1,000, 2,000, 3,000 share 12 seats (divisor 500). What is the quota of the 3,000 group?",["6","4","2","3"],0],
  ["Candidates get 42, 35, and 23 votes out of 100. Candidate A…",["Wins by plurality but has no majority","Has a majority","Loses","Wins by Borda count"],0],
  ["Hamilton's method first gives each group its…",["Lower quota","Upper quota","Largest fraction","Geometric mean"],0]],
 [["Quotas 4.7, 3.2, 2.1 share 11 seats. What is the Hamilton allocation?",["5, 4, 2","4, 3, 2","5, 3, 3","6, 3, 2"],0],
  ["Which divisor method rounds quotas up?",["Adams","Jefferson","Webster","Hamilton"],0],
  ["What is the geometric mean of 4 and 9?",["6","6.5","13","36"],0],
  ["With four candidates, a common Borda rule gives first place how many points?",["3","4","1","0"],0]],
 [["Quotas 5.6, 2.5, 1.9 share 10 seats. What is the Hamilton allocation?",["6, 2, 2","5, 3, 2","6, 3, 1","5, 2, 3"],0],
  ["A Condorcet winner is a candidate who…",["Defeats every other candidate in pairwise comparisons","Gets the most first-place votes","Gets the most Borda points","Gets exactly half the votes"],0],
  ["Populations 15,000, 25,000, 60,000 share 20 seats. What is the quota of the 25,000 group?",["5","4","6","1.25"],0],
  ["Which method uses a geometric-mean rounding rule?",["Huntington-Hill","Jefferson","Adams","Hamilton"],0]]],
/* 9. Geometric Designs */
[[["A shape with detail that repeats at different scales is a…",["Fractal","Polygon","Variable","Quotient"],0],
  ["An isometry preserves…",["Distances","Colors","Only angles","Nothing"],0],
  ["A translation…",["Slides a figure without turning or flipping","Flips a figure","Turns a figure","Enlarges a figure"],0],
  ["A reflection…",["Flips a figure across a line","Slides a figure","Turns around a point","Shrinks a figure"],0]],
 [["Which transformation turns a figure around a fixed point by a stated angle?",["Rotation","Translation","Reflection","Glide reflection"],0],
  ["Which of these is a fractal?",["Sierpinski triangle","A circle","A square","A line segment"],0],
  ["A glide reflection combines…",["A reflection with a translation along the reflection line","Two rotations","A rotation with a scale","Two translations"],0],
  ["Isometries may change a figure's position or orientation, but not its…",["Size","Location","Direction","Place"],0]],
 [["Which is NOT an isometry?",["Enlargement by scale factor 2","Translation","Rotation","Reflection"],0],
  ["Coastlines, clouds, and branching plants show…",["Approximate fractal patterns","Exact mathematical fractals","No pattern","Perfect isometries"],0],
  ["Exact self-similarity occurs in…",["Mathematical fractals","All natural objects","Coastlines only","Clouds only"],0],
  ["To analyze a geometric design, identify the repeated unit, the transformation, and the…",["Line or point of symmetry","Price","Weather","Population"],0]],
 [["A triangle with sides 3, 4, 5 is rotated 90°. Its new side lengths are…",["3, 4, 5","6, 8, 10","1.5, 2, 2.5","4, 5, 6"],0],
  ["The Koch snowflake is an ideal fractal formed by…",["Repeating a simple rule","One large copy","Random drawing","A single reflection"],0],
  ["Fractal dimension often measures complexity…",["Between ordinary whole-number dimensions","Only in whole numbers","As a color","As a probability"],0],
  ["After a reflection, a figure and its image have equal…",["Side lengths and angles","Positions","Orientations","Locations"],0]]],
/* 10. Mathematics of Finance */
[[["In I = Prt, P stands for…",["Principal","Payment","Percent","Profit"],0],
  ["Simple interest is calculated on…",["The original principal","The principal plus past interest","The final amount","Nothing"],0],
  ["Compound interest earns interest on…",["Prior interest too","Only the principal","Only fees","Nothing"],0],
  ["A bond is…",["A loan to an issuer","Ownership in a company","A savings account","A tax"],0]],
 [["What is the simple interest on ₱5,000 at 4% yearly for 3 years?",["₱600","₱200","₱6,000","₱60"],0],
  ["₱10,000 at 6% simple interest for 2 years. What is the future value?",["₱11,200","₱11,236","₱10,600","₱12,000"],0],
  ["6% written as a decimal is…",["0.06","0.6","6.0","0.006"],0],
  ["Bond prices often move ___ market interest rates.",["Opposite to","In step with","Exactly equal to","Unrelated to"],0]],
 [["₱2,000 at 5% compounded annually for 2 years. What is the future value?",["₱2,205","₱2,200","₱2,100","₱2,250"],0],
  ["₱10,000 at 6% compounded yearly for 2 years. How much interest is earned?",["₱1,236","₱1,200","₱11,236","₱1,000"],0],
  ["A longer car-loan term often…",["Lowers the monthly payment but raises total interest","Raises the monthly payment","Removes interest","Removes fees"],0],
  ["Simple-interest future value is ₱11,200 at 6% for 2 years. The present value is…",["₱10,000","₱9,800","₱11,000","₱12,544"],0]],
 [["Borrow ₱12,000 at 1% per month for 12 monthly payments. The payment is about…",["₱1,066.19","₱1,000","₱1,200","₱1,010.00"],0],
  ["₱1,000 at 8% compounded semiannually (m = 2) for 1 year gives…",["₱1,081.60","₱1,080","₱1,040","₱1,160"],0],
  ["₱11,236 is the future value at 6% compounded yearly for 2 years. The present value is…",["₱10,000","₱10,600","₱9,988","₱12,000"],0],
  ["A rate of 6% per year is applied for 18 months. In the formula, t equals…",["1.5","18","0.18","6"],0]]],
/* 11. Codes */
[[["A code is…",["A system for representing information using agreed rules","A random set of letters","A type of graph","A kind of average"],0],
  ["A cipher…",["Transforms a message, often to hide its meaning","Counts votes","Measures spread","Draws a graph"],0],
  ["In Roman numerals, X equals…",["10","5","50","100"],0],
  ["Decryption turns ___ back into ___.",["Ciphertext, plaintext","Plaintext, ciphertext","Codes, graphs","Keys, locks"],0]],
 [["The Roman numeral IX equals…",["9","11","4","6"],0],
  ["49 in Roman numerals is…",["XLIX","IL","XXXXIX","LIX"],0],
  ["With a Caesar shift of 3, the letter A becomes…",["D","C","B","X"],0],
  ["A check digit helps…",["Detect some typing or scanning errors","Prove a product is genuine","Hide the number","Add interest"],0]],
 [["1984 in Roman numerals is…",["MCMLXXXIV","MDCCCCLXXXIV","MCMXXXIV","MCDLXXXIV"],0],
  ["A UPC barcode generally carries…",["An identifier that a database links to product details","The full product record","The price only","The seller's name only"],0],
  ["A Caesar shift of 3 was used. Decrypt KHOOR.",["HELLO","JGNNQ","LIPPS","WORLD"],0],
  ["Does a valid check digit prove a product is genuine?",["No","Yes","Only for books","Only for postal codes"],0]],
 [["For ISBN-13, S = 87 for the first 12 digits. What is d₁₃?",["3","7","0","13"],0],
  ["For ISBN-13, if S ends in 0, d₁₃ equals…",["0","10","1","5"],0],
  ["MCMXC in Roman numerals equals…",["1990","1890","1900","2090"],0],
  ["Is a Caesar cipher secure modern encryption?",["No, it is easy to break","Yes, it is unbreakable","Yes, with a long message","Only with a shift of 13"],0]]],
/* 12. The Mathematical System */
[[["a ≡ b (mod m) means m divides…",["a − b","a + b","a × b","a ÷ b"],0],
  ["17 ≡ ? (mod 12)",["5","7","1","12"],0],
  ["On a 12-hour clock, 10 + 5 is shown as…",["3","5","15","2"],0],
  ["Which is NOT one of the four group rules?",["Commutativity","Closure","Associativity","Identity"],0]],
 [["The additive inverse of 3 modulo 7 is…",["4","3","5","7"],0],
  ["The additive inverse of 5 modulo 8 is…",["3","5","4","8"],0],
  ["The multiplicative inverse of 3 modulo 7 is…",["5","3","4","2"],0],
  ["A multiplicative inverse of a modulo m exists exactly when…",["gcd(a, m) = 1","a is even","m is even","a < m"],0]],
 [["Solve 3x ≡ 6 (mod 9). The solutions are…",["x ≡ 2, 5, 8","x ≡ 2 only","x ≡ 6","No solution"],0],
  ["Does 4x ≡ 3 (mod 8) have a solution?",["No, gcd(4, 8) = 4 does not divide 3","Yes, x = 1","Yes, x = 3","Yes, x = 2"],0],
  ["In a shift cipher with A = 0 … Z = 25, E shifted by 3 becomes…",["H","G","I","B"],0],
  ["The integers under multiplication do not form a group because…",["Most integers have no integer multiplicative inverse","Multiplication is not associative","There is no identity","They are not closed"],0]],
 [["Solve 4x ≡ 2 (mod 6). The solutions are…",["x ≡ 2 and 5","x ≡ 1","x ≡ 2 only","No solution"],0],
  ["The multiplicative inverse of 4 modulo 9 is…",["7","5","2","3"],0],
  ["What is (7 × 8) mod 5?",["1","6","0","3"],0],
  ["Which number has NO multiplicative inverse modulo 8?",["4","3","5","7"],0]]]
];

/* ===== MORE QUESTIONS from the updated reviewer's Problem-Solving Examples and Practice Problems (correct answer listed first; the game shuffles the options) ===== */
(function(){const N=[[[0, "List the next three Fibonacci terms after 21 and 34.", ["55, 89, 144", "55, 88, 143", "56, 90, 146", "42, 68, 110"]], [0, "A golden rectangle has a short side of 30 cm. About how long is its long side?", ["48.54 cm", "46.18 cm", "18.54 cm", "60 cm"]], [1, "Compute 144 ÷ 89 to four decimal places. What does it show?", ["1.6180: very close to the golden ratio", "1.5670: far from the golden ratio", "1.7500: exactly the golden ratio", "0.6180: the reciprocal of 144"]], [1, "A Fibonacci-type sequence starts with 2 and 5. What are the first eight terms?", ["2, 5, 7, 12, 19, 31, 50, 81", "2, 5, 10, 15, 25, 40, 65, 105", "2, 5, 7, 9, 11, 13, 15, 17", "2, 5, 8, 13, 21, 34, 55, 89"]], [2, "A rectangle is 20 cm by 12 cm. Is it a golden rectangle?", ["Not quite: 20 ÷ 12 ≈ 1.667, not 1.618", "Yes: 20 ÷ 12 = 1.618", "Yes: 12 ÷ 20 = 1.618", "No: it is a square"]], [2, "Find the rule and the 15th term of 5, 9, 13, 17, …", ["Add 4; nth term = 4n + 1; 15th term = 61", "Add 4; nth term = 4n + 5; 15th term = 65", "Add 5; nth term = 5n; 15th term = 75", "Add 4; nth term = 4n + 1; 15th term = 60"]], [3, "A Fibonacci rectangle is built from squares with sides 1, 1, 2, 3, 5 and 8. What is its size and area?", ["13 by 8; area 104", "13 by 8; area 108", "21 by 8; area 168", "8 by 8; area 64"]], [3, "Find the 20th term of the pattern 3, 7, 11, 15, …", ["79", "83", "80", "77"]]], [[0, "Translate: “six more than three times a number.”", ["3x + 6", "6x + 3", "3(x + 6)", "x + 18"]], [0, "Evaluate 2x² − 3x + 4 when x = −1.", ["9", "3", "−1", "5"]], [1, "Translate: “the difference of a number and 9, divided by 2.”", ["(x − 9)/2", "x − 9/2", "(9 − x)/2", "2/(x − 9)"]], [1, "U = {1,2,3,4,5,6,7,8}, A = {1,3,5,7}, B = {3,4,5,6}. Find A ∩ B.", ["{3, 5}", "{1, 3, 4, 5, 6, 7}", "{1, 7}", "{2, 8}"]], [1, "With the same U and B, what is Bᶜ?", ["{1, 2, 7, 8}", "{2, 4, 6, 8}", "{3, 4, 5, 6}", "{1, 7}"]], [2, "Let f(x) = 5 − 2x. For which x is f(x) = 1?", ["x = 2", "x = 3", "x = −2", "x = −1"]], [2, "Which of these relations is NOT a function?", ["{(1,2), (1,3), (2,5)}", "{(1,4), (2,4), (3,5)}", "{(a,1), (b,2), (c,3)}", "{(1,1), (2,2), (3,3)}"]], [3, "Are the whole numbers closed under division?", ["No: 1 ÷ 2 = 0.5 is not a whole number", "Yes: dividing always gives a whole number", "Yes, but only when dividing by 1", "No: you cannot divide whole numbers"]], [3, "Which of these is a proposition?", ["9 is a prime number.", "Close the door.", "Is 5 odd?", "x + 3 = 7 (x not given)"]]], [[0, "Rica buys 4 bottles of juice at ₱28 and 3 sandwiches at ₱42, and pays ₱500. How much change does she get?", ["₱262", "₱238", "₱372", "₱362"]], [0, "The sum of two consecutive integers is 83. What are they?", ["41 and 42", "40 and 43", "41 and 43", "42 and 43"]], [1, "Working backward: I think of a number, add 9, then double the result. I get 38. What is the number?", ["10", "19", "29", "14"]], [1, "A shop sells 3 shirt designs and 4 pants designs. How many different outfits are possible?", ["12", "7", "24", "14"]], [2, "A rectangle’s length is 3 more than twice its width. The perimeter is 54 cm. What are the width and length?", ["Width 8 cm, length 19 cm", "Width 9 cm, length 18 cm", "Width 6 cm, length 15 cm", "Width 10 cm, length 17 cm"]], [2, "Find the 25th term of 7, 10, 13, 16, …", ["79", "75", "82", "76"]], [2, "Ten people each shake hands once with every other person. How many handshakes occur?", ["45", "90", "55", "100"]], [3, "Which value of n is a counterexample to “for every whole number n, n² is greater than n”?", ["n = 1 (or n = 0)", "n = 2", "n = 3", "n = 10"]], [3, "“All squares are rectangles. ABCD is a square. So ABCD is a rectangle.” What kind of reasoning is this?", ["Deductive and valid", "Inductive", "A hasty generalization", "Confusing correlation with cause"]]], [[0, "What is the mode of 6, 9, 9, 12, 14, 15, 21?", ["9", "12", "14", "15"]], [0, "Find the mean of 18, 22, 25, 27, 30, 34.", ["26", "25", "27", "24"]], [1, "Find the weighted mean: Exam 40% (84), Lab 25% (90), Quiz 15% (76), Project 20% (88).", ["85.1", "84.5", "86.0", "87.2"]], [1, "A test has mean 50 and SD 4. What is the z-score of x = 58?", ["2", "−1.5", "1.5", "0.5"]], [2, "Find the sample variance of 3, 5, 7, 9, 11.", ["10", "8", "3.16", "2.83"]], [2, "Two fair dice are rolled. What is P(sum = 7)?", ["1/6", "1/12", "7/36", "1/36"]], [2, "X takes the values 1, 2, 3, 4, 5 with probabilities 0.1, 0.2, 0.3, 0.3, 0.1. What is E(X)?", ["3.1", "3.0", "3.3", "2.9"]], [2, "A student scored 88 on Test A (mean 80, SD 4) and 90 on Test B (mean 82, SD 8). Where did the student do better relative to the class?", ["Test A (z = 2 vs z = 1)", "Test B (z = 2 vs z = 1)", "Test B, because 90 is higher", "Both are equal"]], [3, "One card is drawn from a standard deck. What is P(face card or heart)?", ["11/26", "25/52", "3/13", "1/4"]], [3, "A player makes 70% of free throws and takes 4 shots. What is P(exactly 3 made)?", ["0.4116", "0.343", "0.7", "0.2401"]], [3, "A disease affects 2% of people. A test is positive for 95% of sick people and gives a false positive for 4% of healthy people. About what is P(sick | positive)?", ["32.65%", "95%", "2%", "48.5%"]], [3, "What sample size is needed for 95% confidence (z = 1.96), margin of error 4% and unknown proportion?", ["601", "600", "385", "1,068"]]], [[0, "A graph has 10 vertices and 15 edges. Using V − E + F = 2, how many faces does it have?", ["7", "5", "3", "27"]], [0, "Which is true of K₄ (4 vertices, all joined)?", ["It has neither an Euler path nor an Euler circuit", "It has an Euler circuit", "It has an Euler path only", "It has both"]], [1, "A graph has vertex degrees 3, 3, 2, 2, 2. How many edges does it have?", ["6", "12", "5", "7"]], [1, "Does K₅ (5 vertices, all joined) have an Euler circuit?", ["Yes: every vertex has degree 4", "No: it has four odd vertices", "Only an Euler path", "It cannot be decided"]], [2, "What is the chromatic number of a 5-cycle?", ["3", "2", "4", "5"]], [2, "What is the chromatic number of K₄?", ["4", "3", "2", "5"]], [2, "A complete graph has 6 vertices. How many routes does brute force check from a fixed start?", ["120", "720", "60", "24"]], [3, "For 6 vertices, how many different circuits are there if a route and its reverse count as the same?", ["60", "120", "360", "720"]], [3, "In the Königsberg problem the land areas have degrees 3, 3, 3 and 5. How many bridges are there?", ["7", "14", "11", "5"]]], [[0, "Is (2, 3) feasible for x + 2y ≤ 9 and 3x + y ≤ 12?", ["Yes: 2 + 6 = 8 ≤ 9 and 6 + 3 = 9 ≤ 12", "No: 8 is greater than 9", "No: 9 is greater than 12", "Only if x = y"]], [1, "Maximize Z = 5x + 4y subject to x + y ≤ 6, x ≤ 4, y ≤ 5, x, y ≥ 0. What is the maximum?", ["28 at (4, 2)", "25 at (1, 5)", "20 at (4, 0)", "30 at (6, 0)"]], [2, "A workshop makes tables (₱500 each, 4 h carpentry) and chairs (₱300 each, 2 h carpentry). 40 carpentry hours and 14 finishing hours (1 h per item) are available. Which plan gives the greatest profit?", ["6 tables and 8 chairs: ₱5,400", "10 tables and 0 chairs: ₱5,000", "0 tables and 14 chairs: ₱4,200", "7 tables and 7 chairs: ₱5,600"]], [2, "Minimize C = 2x + 3y subject to x + y ≥ 5, x + 3y ≥ 9, x, y ≥ 0. What is the minimum?", ["12 at (3, 2)", "15 at (0, 5)", "18 at (9, 0)", "10 at (5, 0)"]], [3, "Maximize Z = 4x + 3y subject to x + y ≤ 5 and 2x + y ≤ 8. The simplex method gives…", ["x = 3, y = 2, Z = 18", "x = 4, y = 0, Z = 16", "x = 0, y = 5, Z = 15", "x = 2, y = 3, Z = 17"]], [3, "A student finds the corner points and reports only “maximum = 360.” What is missing?", ["The values of the decision variables where it occurs, stated in context", "The slack variables", "The number of constraints", "Nothing, the maximum is enough"]], [3, "Notebooks (x) earn ₱40, planners (y) earn ₱70. Printing takes 2 min and 5 min, with 350 min available, and at most 100 items. Which is the correct model?", ["Maximize P = 40x + 70y; 2x + 5y ≤ 350; x + y ≤ 100", "Minimize P = 40x + 70y; 2x + 5y ≤ 350; x + y ≤ 100", "Maximize P = 2x + 5y; 40x + 70y ≤ 350; x + y ≤ 100", "Maximize P = 40x + 70y; 5x + 2y ≤ 350; x + y ≤ 100"]]], [[0, "How many rows does a full truth table need for 4 basic propositions?", ["16", "8", "4", "12"]], [0, "Let p = F and q = T. What is the value of p ↔ ¬q?", ["True", "False", "It cannot be known", "It is undefined"]], [1, "What is the converse of “If a polygon is a square, then it has four sides”?", ["If a polygon has four sides, then it is a square", "If a polygon is not a square, then it does not have four sides", "If a polygon does not have four sides, then it is not a square", "A polygon is a square and has four sides"]], [1, "Which statement is logically equivalent to “If a polygon is a square, then it has four sides”?", ["If a polygon does not have four sides, then it is not a square", "If a polygon has four sides, then it is a square", "If a polygon is not a square, then it does not have four sides", "A polygon has four sides only if it is not a square"]], [2, "Negate: “Maria is present and Jose is absent.”", ["Maria is absent or Jose is present", "Maria is absent and Jose is present", "Maria is present or Jose is absent", "Maria is present and Jose is present"]], [2, "Classify p ∨ ¬p.", ["Tautology", "Contradiction", "Neither", "A converse"]], [3, "“If the battery is dead, the car will not start. The car starts. So the battery is not dead.” This argument is…", ["Valid (it uses the contrapositive)", "Invalid (affirms the conclusion)", "Invalid (denies the hypothesis)", "Valid only sometimes"]], [3, "Let p = “It is raining” and q = “I bring an umbrella.” Write “I bring an umbrella only if it is raining.”", ["q → p", "p → q", "¬p → ¬q", "p ↔ q"]], [3, "(p → q) ∧ (q → p) is equivalent to…", ["p ↔ q", "p ∧ q", "p ∨ q", "p → q"]]], [[0, "Populations are 4,500, 3,600 and 1,900 (total 10,000) with 10 seats. What is the standard divisor?", ["1,000", "10", "100", "4,500"]], [0, "Populations 14,500, 9,800 and 5,700 share 15 seats. What is the standard divisor?", ["2,000", "1,500", "15,000", "30"]], [1, "Hamilton’s method: 11 seats, standard quotas 4.7, 3.2 and 3.1. How are the seats shared?", ["5, 3, 3", "4, 4, 3", "4, 3, 4", "5, 4, 2"]], [1, "Votes: A = 120, B = 95, C = 85. What is the result?", ["A wins by plurality; there is no majority winner", "A wins by majority", "B wins by plurality", "C wins by plurality"]], [2, "Huntington-Hill rounding: the quota is 2.45 (√6 ≈ 2.4495). It rounds to…", ["3", "2", "2.5", "1"]], [2, "40 voters rank X > Y > Z, 35 rank Y > Z > X, 25 rank Z > Y > X. Who wins the Borda count (2, 1, 0 points)?", ["Y with 135 points", "X with 80 points", "Z with 85 points", "X with 120 points"]], [3, "For the same 100 voters, which candidate is the Condorcet winner?", ["Y, who beats X 60–40 and Z 75–25", "X, who has the most first-place votes", "Z, who beats X 60–40", "There is no Condorcet winner"]], [3, "Hamilton’s method: populations 14,500, 9,800 and 5,700 with 15 seats. How many seats does each get?", ["7, 5 and 3", "8, 5 and 2", "7, 4 and 4", "6, 5 and 4"]]], [[0, "How many small solid triangles are in the Sierpinski triangle at stage 4?", ["81", "64", "27", "16"]], [0, "Rotate the point (3, 2) by 180° about the origin.", ["(−3, −2)", "(3, −2)", "(−2, 3)", "(2, −3)"]], [1, "Rotate (3, 2) by 90° counterclockwise about the origin.", ["(−2, 3)", "(2, −3)", "(−3, −2)", "(2, 3)"]], [1, "Reflect the point (5, −2) across the horizontal line y = 1.", ["(5, 4)", "(5, 3)", "(−5, −2)", "(5, 1)"]], [2, "Translate P(−2, 1) by (4, −3). Where is P′?", ["(2, −2)", "(−6, 4)", "(2, 4)", "(−2, −2)"]], [2, "Does a transformation that doubles the size of a figure count as an isometry?", ["No: distances change", "Yes: the shape is preserved", "Yes: angles stay the same", "Only for squares"]], [3, "A Koch snowflake starts with a triangle of side 6 cm. What is the perimeter at stage 2?", ["32 cm", "24 cm", "18 cm", "42.67 cm"]], [3, "A figure is made of 5 copies of itself, each scaled down by a factor of 3. Its fractal dimension is…", ["log 5 ÷ log 3 ≈ 1.465", "log 3 ÷ log 5 ≈ 0.683", "5 ÷ 3 ≈ 1.667", "log 15 ≈ 1.176"]], [3, "How many lines of reflection symmetry does a regular hexagon have, and what is its smallest rotation?", ["6 lines; 60°", "6 lines; 30°", "3 lines; 120°", "12 lines; 60°"]]], [[0, "Find the simple interest on ₱12,000 at 5% per year for 3 years.", ["₱1,800", "₱600", "₱13,800", "₱18,000"]], [0, "A loan of ₱15,000 earns ₱1,350 interest over 3 years. What is the annual simple interest rate?", ["3%", "9%", "6%", "1.5%"]], [1, "Find the simple interest on ₱8,000 at 6% per year for 9 months.", ["₱360", "₱480", "₱4,320", "₱3,600"]], [1, "How many years does ₱20,000 take to earn ₱3,000 simple interest at 5% per year?", ["3 years", "5 years", "1.5 years", "15 years"]], [2, "Find the future value of ₱30,000 at 4% compounded annually for 5 years.", ["₱36,499.59", "₱36,000.00", "₱35,000.00", "₱37,550.12"]], [2, "₱5,000 at 8% for 3 years: how much more does annual compounding earn than simple interest?", ["₱98.56", "₱1,200", "₱6,298.56", "₱200"]], [3, "Both loans borrow ₱100,000. Loan X: ₱3,400 a month for 36 months. Loan Y: ₱4,700 a month for 24 months. Which costs less in total?", ["Loan Y (₱112,800 vs ₱122,400)", "Loan X, because its payment is lower", "They cost the same", "Loan X (₱112,800)"]], [3, "A person buys 100 shares at ₱80, sells at ₱92 and receives a ₱2 dividend per share. What are the total gain and percent return?", ["₱1,400 gain; 17.5% return", "₱1,200 gain; 15% return", "₱1,400 gain; 15.2% return", "₱200 gain; 2.5% return"]], [3, "A credit card balance of ₱10,000 grows 3% per month with no payments. What is owed after 2 months?", ["₱10,609", "₱10,600", "₱10,300", "₱11,000"]]], [[0, "Write 1,964 in Roman numerals.", ["MCMLXIV", "MDCCCCLXIV", "MCDLXIV", "MLXIV"]], [0, "Convert XLVII to a number.", ["47", "57", "43", "67"]], [1, "Encrypt “CODE” with a Caesar shift of 4.", ["GSHI", "FRGH", "GSHJ", "KWLM"]], [1, "Decrypt “WKH” with a shift of 3.", ["THE", "TAB", "TEA", "WHO"]], [2, "Encrypt “XYZ” with a shift of 7. Remember the wrap-around.", ["EFG", "DEF", "FGH", "ABC"]], [2, "Convert MDCCLXXVI to a number.", ["1,776", "1,676", "1,876", "1,766"]], [2, "Is 9780306406158 a valid ISBN-13?", ["No: the check digit should be 7", "Yes, it is valid", "No: it has too many digits", "Yes: ISBN-13 has no check digit"]], [3, "Find the ISBN-13 check digit for the first 12 digits 978013110362.", ["7", "3", "0", "9"]], [3, "Find the UPC-A check digit for 01234567890.", ["5", "0", "3", "7"]], [3, "True or false: if a product code has a valid check digit, the product must be genuine.", ["False: a check digit only helps detect some errors", "True: it proves the product is authentic", "True, but only for UPC codes", "False: check digits never detect errors"]]], [[0, "Reduce 125 mod 8.", ["5", "15", "1", "7"]], [0, "Reduce −10 mod 7.", ["4", "3", "−3", "10"]], [1, "It is 8 o’clock in the evening. What time is it 50 hours later?", ["10 in the evening", "8 in the evening", "10 in the morning", "6 in the evening"]], [1, "Today is Monday. What day is it 45 days later?", ["Thursday", "Wednesday", "Friday", "Monday"]], [1, "Compute (37 × 12) mod 7.", ["3", "2", "5", "1"]], [2, "What is the multiplicative inverse of 7 modulo 11?", ["8", "4", "3", "9"]], [2, "Does 4 have an inverse modulo 10?", ["No: gcd(4, 10) = 2", "Yes: 3", "Yes: 5", "Yes: 4"]], [3, "Solve 3x ≡ 5 (mod 8).", ["x ≡ 7", "x ≡ 5", "x ≡ 3", "x ≡ 1"]], [3, "Solve 6x ≡ 9 (mod 12).", ["No solution, because gcd(6, 12) = 6 does not divide 9", "x ≡ 3", "x ≡ 9", "x ≡ 1.5"]], [3, "Using A = 0, …, Z = 25, encrypt “MATH” with a shift of 10.", ["WKDR", "XLEI", "WJCQ", "VZSG"]], [3, "Is the set of even integers under addition a group?", ["Yes: closed, associative, identity 0, inverse −a", "No: it is not closed", "No: it has no identity", "No: it has no inverses"]]]];N.forEach((m,t)=>m.forEach(([k,q,o])=>Q[t][k].push([q,o,0])))})();
