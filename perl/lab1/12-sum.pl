print "give me some values (9999 to stop)\n";
$sum = 0;
while (1) {
  $input = <STDIN>;
  if ($input == 9999) {
    last;
  }
  $sum += $input;
}
print "$sum \n"
