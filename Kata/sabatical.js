// request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// val = your value to the organisation
// happiness = her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string s.

// Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

function sabb(s, val, happiness) {
  const totalPoints = val + happiness;
  const sabbatical = "sabbatical";

  for (let i = 0; i < s.length; i++);

  if (sabbatical.includes(s[i])) {
    totalPoints++;
  }

  return totalPoints > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}
