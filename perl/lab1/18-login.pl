print "Username: ";
chomp ($user = <STDIN>);
print "Password: ";
chomp ($pass = <STDIN>);

if ($user eq "admin" and $pass eq "admin") {
  print "HI\n";
} else {
  print "WRONG ENTRIES\n";
}
