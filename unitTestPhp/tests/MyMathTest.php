<?php
/**
 *
 */
class MyMathTest extends PHPUnit_Framework_TestCase
{
    private $mathC;

    /**
     * @dataProvider testData
     */
    public function testisPostive($n, $x, $result, $pos)
    {
        $this->assertEquals($pos, $this->mathC->isPostive($x));
        //echo "hi";
        return array($n, $x, $result);
    }

    public function testData()
    {
        return array(
            'pow(2, 3) = 8' => array(2, 3, 8, true),
            'pow(2,2) = 4' => array(2, 2, 4, true),
            'char base not supported' => array('hi', 3, -1, true),
            'char power not suported' => array(2, 'hi', -1, false),
            'negative power not supportrd' => array(2, -3, -1, false),
        );
    }

    /**
     * @dataProvider testdata
     */
    public function testposPower($n, $x, $result, $pos)
    {
        $this->assertEquals($result, $this->mathC->posPower($n, $x));
    }

    public function setUp()
    {
        $this->mathC = new MyMath();
    }













    /**
     * @test
     */
     function positive() {
         $this->assertTrue($this->mathC->isPostive(3));
         return 3;
     }

     /**
      * @test
      * @depends positive
      */
     function power($x) {
         $this->assertEquals(27, $this->mathC->posPower(3, $x));
     }
}
