print "enter one (red, green, blue) ";
%fruits = ('red', 'apple', 'green', 'leaves', 'blue', 'ocean');
chomp($key = <STDIN>);
print $fruits{"$key"}."\n";
