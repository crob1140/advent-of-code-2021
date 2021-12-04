const boardSize = 5;
const completeBitmap = (1 << boardSize) - 1;

const input = `
87,12,53,23,31,70,37,79,95,16,72,9,98,92,5,74,17,60,96,80,75,11,73,33,3,84,81,2,97,93,59,13,77,52,69,83,51,64,48,82,7,49,20,8,36,66,19,0,99,41,91,78,42,40,62,63,57,39,55,47,29,50,58,34,27,43,30,35,22,28,4,14,26,32,10,88,46,65,90,76,38,6,71,67,44,68,86,25,21,24,56,94,18,89,61,15,1,45,54,85

49  0  9 90  8
41 88 56 13  6
17 11 45 26 75
29 62 27 83 36
31 78  1 55 38

52 53 19 56 80
94 33  3 78 32
10 89 66 48 55
99 23 88  8 39
76 75 44 79 14

 2 60 64 25 55
89  1 21 65 41
 6 12 58 11 68
23 49 44 91 14
45 52 99 47 63

49 96  0 87 40
13 22 10 84 52
95 30 50 14  1
58 17 98 45 38
63 11 74 62 42

97 98 43 36 48
 6 83 89 41 85
69 79 51  0 67
62 93 30 82 45
87 32 25 34 29

31 62 76 66 93
77 11 97 51 32
42 88 68 35 72
29 79 70 85 47
91  3 96 38 14

98 77 12 72 83
22 78 75 88 11
67 63 84 60  6
29 95 73 96 53
45 21 66 57  9

16 47 66 85 17
54 87 78 21 60
45 44 35 33 32
88 46 27 49 18
58 42 72 24 75

82  9  2 68  0
16 72 83 31  5
60 34 92 62 21
13 48 69 59 81
 7 87 28 42 14

29 58 10 50 19
47  4 51 22 69
66  5 83 82 25
71 23 64 93 14
80 46 76 65 33

98 54 93 47 26
44 23 33 40 72
50 36 82 48 19
29 18 16 56 55
24 95 78 42 27

57 35 36 51 55
61 85 33 73 47
 2 53 59 10 26
17 89 96 78 20
 3 56 84 97 98

25 37 24 76 98
20 48 47 40 22
 8 55 93 64 70
 5 13 30 31 46
10 65 68  3 66

72 41 68 78 93
38 51 37 67 99
81  2 48 88 43
12 15 57 24 22
 3 16 92 74 75

84 96 80 41 16
85 77 47 95 46
67 37 36 27 26
87 70 66 75 86
13 64 31 25 48

79 19 53 10 86
65 78 52 17 61
83 98 22 88  8
14 91  7 85  2
23 35 68 55 16

31 58 84 49 55
38 14 25 23 11
70 37  0 46 29
 8 24 59 53 68
66 17 10  3 99

40 62 31 38 85
86 75 81 37 24
51 87  5 15 73
58 83 46 32 60
 4 25 71  0  8

 1 24 53 43 17
37 27  6 19  9
 3 89 63 80 67
11 26 62 22  7
59 25 45 74 49

61 84 59 57 24
93 83 10  9 51
 8 21 26  6 68
71 48  5 86 16
55 11 29 25 35

66 93 28 81 23
98 77 82 52 70
25 99 34 65 95
45  6 56 30 80
 2 79 94 33 13

 7 38  9 16 19
20 34 80  3 79
 1 26 49 82 97
14 71 64 67 59
40 72 98 25 99

34  3  4 51 52
38 15 24 71 36
87 26 31 44 70
95 69 66  0 17
19 13  7 62  6

 2  5  6  9 61
40 55 17 13 67
95 81 30 25 47
45 75 88 68 48
70 59 34 35  1

29 59 26  0 84
22 74 99 42  1
47 24 76 66 32
83 36 16 78 82
25 98 49 77  6

35 16 21 88 17
73 26 19 83 66
46 36 70 22  8
32 48 72 28 68
71 11 99 29 10

98 55 54 52  2
48 58 27 43 84
 9  0 29 65 57
 5 18 62 85 91
 8 94 31 80 16

84 20 60 71 25
31 46 66 75 48
42 43 96 86 88
14 98 47 76 87
32 67 92 41 97

24 67 68  3 32
79 17 57 61 95
71 29 22 63 52
19 26 48 44 86
70 20 74 76 47

62 28 80 18 88
76 53 65 81 40
21 59 79 69  8
60 94 14 64 92
13 33 74 11 51

86 90 87 66 34
63 74 68 32 14
64 85 55 47 83
40 53 57 50 17
49 54 42 69 46

60 53 12 66 55
42 16 96 98 51
10 79 38 36 35
72 14 86 80  2
62 76 83 17 61

31 10 57 24 82
45 32 44 60  8
21 20 65  7 73
17 89 63  4 66
96 97 85 50 33

75 44 31 76 26
91 94 99 32 72
74 10 86 71 90
11 37 81 15 95
51 34 28 35 59

98 14 58 10 48
26 38 54 34 66
31 82 35 32 78
96 19 94 15  2
75 23 97 55 24

45 85 22 98  0
41 55 90 39 51
62 19 82 13 21
24 20  8 84 16
32 66 95 80 68

66  2 23 78 88
76 15 97 62 59
19 32  4 99 46
30 37 80 77 91
68 44 42 22 74

27 98 97 73 63
35 31 67 64 71
62 25 34  6 65
84 29 77 24 10
99 82 21 33 39

18 29 12 64 72
 9 85 74 36 10
94 71 39 76 46
90 33 79 80  2
40 20 25 95 81

99 81 37 58 10
55  6 96 93 21
28 67 33 42 50
73  1 65  9 61
27 44 78 45 63

80 19 46 94 66
21 99 49 59 53
84  4 10  1 52
37 57 85  2 32
11 35 56 20 23

30 71 55 20 89
14 25 41 49 87
84 93 62 76 72
58 81 88 98 66
10 44 82 17 73

68 11 74 55 27
77 94 26 69 65
60 64 17 48 19
45 25 61 85 70
22 44  4 54 24

29 50 92 98 61
83 78 44 90 52
36 45  7 41 12
23 99  3 28 64
 6 62 71  5 27

70 28 39 95 24
41 51 81 43 37
92 40 48 10 34
36 56 67 69 58
85 91 68 93 84

46 35 73 24 21
79 42 97 34 67
74 55  0 88 15
33 84 17 59  5
93 82 92 51  3

14 12 39 97 25
95 32 99 35 86
71 91 63 37  5
70 48 18 42 16
75 30 60 21 78

64  2 78 87 76
32 82 35 57 26
 3 99 20 36 72
25 63 13 69 39
50 29 52  0 81

69 49 68 81 87
25 97 64 19 93
 4 30 80 15 13
95 55 29 60 10
73 53 11 43 41

48 63 71 80 14
32 82 61 88 27
 8 39 49 43  9
20 29 73 96 67
83 87 36 89 51

47 85 11 93 18
70 36  6 35 26
 1 98 48 63 14
 2 53 12 96  8
90 15 43 45 62

45 73 25  1 54
11 20 97 66 63
42  4 31 67 77
23 68 91 47 37
86 65  3 87 79

28 74 19 88 35
58 82 37 65  8
59 38 27 21  9
50 53 39 89 48
41 78 13 43  1

88 85 49 97 70
 3 87  2 69 23
26 80 73 71 31
 6 82 74 21 86
33 36 67  4  5

55 28 54 36 84
52 13 48 37 34
66 11 10 19 16
32  0 93 77 23
20  9 57 91 45

14  2  7 44 32
38 72 37 73 91
27 34 68 61 35
95 97  6 47 92
36  1 20 66 17

55  3 89 99 76
17 22 45 62  6
72 75 25 69 92
83 35 15 11 21
78 54 36 48 64

20 58 84 67 18
26 89 62 47 72
74 77 43 52  4
45  8 38 31 96
33 75 68 76 63

64 32 17 52 30
 9 70 58 38 33
54 83 15 28 43
63 69 39 62 48
89 98 81 91 49

75  5 14 82 16
 8 77 29 65 48
 9  3 24 46 89
94 36 27 21 80
30 13 64 51 37

69 23 14 26 55
83  5 77 41 53
19 30  3 52 84
98 78 90 80 92
94 42 58 29 50

54 23 73 55 79
40 80 30 99 42
81 53  1 72 75
34 90 84 39 37
51 31 57 74 65

61 26 17 18 20
90 98 43 47 72
19 63 73 15 58
 4  2  7 51  9
11 31  1 54 96

15 84 42 49 16
85 62 86 12 29
63  6 80 94 70
45 52 65 48 37
90 97 73  7 95

79 74 24 76 31
97 94 83 14  3
40  1 53 81 12
90 48 27 21 25
85 56 95 75 54

65 42 46  8 83
54 89 93 70 32
77 53 95 34 37
24  9 85 74  4
 3 50 14 76 60

24 57 43  0 60
 2 49 41 90 62
23 16 17 75 26
31 50 20 48 92
18 27 44 69 76

 1 55 29 58 66
76 49 80 18 87
24 20  4 38 92
15 73 32 31 57
61 71 52  6 60

90 78 56 14 80
47 31  6 50 74
 3 36 63 25 65
93 22 30 11 37
 4 27 45 29 42

34 41 12 27 99
68 16 58 79  5
22 81  6 48 15
97 95 69 29 42
61  8 23 14 70

22 16 19 68 76
21 94 95 52  7
66 59 80 50 62
 5 45 43 29 97
83 87 28 58 51

73 18 43 92 54
20 61 98  9 62
67 19 51 24 32
41 38 37 64 17
12 77 56 96 82

56 86 12 94 96
59 51 82 16 31
68 15 23 28 42
11 30  7 69 13
35 14 18 21  4

39 74 21 27 84
30 50  6 19 64
88 73 44 67 25
37 35 16 77 42
85 81 15 59 68

29  5 32 91 59
 1 48 20 24 95
71  3  0 60 89
85 65 28 31  6
87 27 19 37 11

36 10 26 71 11
92 23 60 93 64
63 80 20 42  9
97 41 79 91 37
 8 67 56 38 30

56 91 36 41 79
59 92 63 86 22
17 32 73 48 58
12 78 67  5 13
30 23 44 54 24

83 89 64 88 28
98 63 54 92 39
70 60 21 22 37
24 91 23 53 27
10 12 65 85 32

77 33 14 72 65
67 50 22 21 42
40 69 36 30  7
68 53  2 27 44
66 32 47 34 54

46  6 84  7 63
72 53 30 18 58
12 28 32 33 25
88  1 85 19 23
75 83 26 86 57

59 24 46 60  3
72 68 30 36 71
14 37 95 63 82
55 38 93 94 21
20 13 69 76  6

55 90 73 61 77
50 47 93 86 48
66 85 22 32  2
51 40 57 63 25
 5  0 72  9 59

 1 59 73 51 94
54 78 45 19 16
30 97 87 52 67
66 32 31 37 26
23  3 65 83  6

37 11 53 39 83
54 46 72 13  9
57 27 24 96 26
76 17 31 59 25
68  0 48 77 60

18 79 54  3 94
34 16 70 88 96
22 78 17 85 69
15 68 55 13 24
27  5 63 52  9

27 84 82 87  8
51 60 67 37 76
65 59 28 36 26
44 22 35 73 45
 1 58 23 16 77

73 14  0 64 88
31 38 78 39 17
67 96 93 76 58
18 15 83 30 99
91 34 20 82 43

10 87 15 45  0
41 99 21 37 95
49 18 29 44 79
43 59 67 78  3
97 28 53  6  7

 8 55 17 39 67
12 35 62 95 44
48 29 83  0 91
 5 65 99 20 58
23 15 52 81 75

50  8 42 43 47
94 10 76 11 81
86 14 31 79 63
19 37 55 58 68
48 84 25 61 23

77 44 23 12  1
18 52 31 75 70
 5 85 28 89  6
42 58 88  9 87
38 99 57 78 72

17 45 77 99 81
16 31 69 14 64
39 62 59 13 96
 2 28 24 38 83
 3 55  1 15 75

66 21 68  0 78
45 31 98 54 74
32 97 86 14 51
94 52 56  7 17
88 44 33 20 77

69  1 70 35 26
 4 50 13 55 66
27 24 86 81 11
20 97 25 18 37
71 28 68  6 15

44  6 93 24 17
38 45 68  3 72
62 34 92 90 65
29 69 16 83 14
71  5 67  4 47

61 34 67 97 93
94 50 48 37 68
39  3 56 41 35
21 19 86 12 69
73 83 28 26 90

48 43 25  6 91
18 89 15 88 71
61 22 58 10  7
76 11 78 39 13
75 34  4 47 45

27 45 10 53 21
96 60 50 89 69
66 34 94 84  5
57 42 55 75 51
33 62 74 13 86

15 63  2 35 11
54  0 69 94 92
27 50 70 10 57
12 81 45 90 40
22 87 61 48 44

68 22 95 71 42
18  0 61 86 44
46 29 51 23 99
11 60 66 12 52
53 87 41 90 49
`;

const rows = input.trim().split('\n');
const numbers = rows[0].split(',').map(draw => parseInt(draw));
const numBoards = (rows.length - 1) / (boardSize + 1); // 1 row of empty space above each board
const boards = [];
for (let i = 0; i < numBoards; i++) {
    const board = [];
    const boardStartIndex = i*(boardSize+1) + 2; //one index skipped for the very first row, another for the empty line above each board 
    for (let j = 0; j < boardSize; j++) {
        const row = rows[boardStartIndex + j];
        board.push(row.trim().split(/\s+/).map(col => parseInt(col)));
    }
    boards.push(board);
}

// Keep a map from number to boards that contain it so that we can locate them quickly
const numbersToBoardPositions = boards.reduce((acc, board, boardIndex) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const number = board[i][j];
            if (acc[number] === undefined) {
                acc[number] = [];
            }
            acc[number].push({ boardIndex, row: i, column: j });
        }
    }

    return acc;
}, {});

const createMarkableBoard = (board) => {
    const markableBoard = {
        board,
        rowBitmaps: [],
        columnBitmaps: []
    }
    for (let i = 0; i < boardSize; i++) {
        markableBoard.rowBitmaps[i] = 0;
        markableBoard.columnBitmaps[i] = 0;
    }
    return markableBoard;
}

const markSquare = (markableBoard, row, column) => {
    markableBoard.rowBitmaps[row] += 1 << (boardSize - column - 1);
    markableBoard.columnBitmaps[column] += 1 << (boardSize - row - 1);
};

const isComplete = (bitmap) => bitmap === completeBitmap;

const isSquareMarked = (board, row, column) => {
    return (board.rowBitmaps[row] & 1 << (boardSize - column - 1)) !== 0;
}

const checkCompleted = (board) => {
    for (let i = 0; i < boardSize; i++) {
        if (isComplete(board.rowBitmaps[i]) || isComplete(board.columnBitmaps[i])) {
            return true;
        }
    }
    return false;
}

const findNextSolution = (numbers, markableBoards, alreadyCompletedBoards) => {
    let solvedBoardIndexes = [];
    for (let number of numbers) {
        const boardPositions = numbersToBoardPositions[number];
        for (let position of boardPositions) {
            const markableBoard = markableBoards[position.boardIndex];
            if (alreadyCompletedBoards.has(position.boardIndex)) {
                continue;
            }

            markSquare(markableBoard, position.row, position.column);
            if (checkCompleted(markableBoard)) {
                solvedBoardIndexes.push(position.boardIndex);
            }
        }

        if (solvedBoardIndexes.length !== 0) {
            return { solvedBoardIndexes, lastNumber: number };
        }
    }
}

const getBoardScore = (markableBoard, lastNumber) => {
    let unmarkedSum = 0;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (!isSquareMarked(markableBoard, i, j)) {
                unmarkedSum += markableBoard.board[i][j];
            }
        }
    }
    return unmarkedSum * lastNumber;
}

const solvePart1 = (numbers, boards) => {
    const markableBoards = boards.map(createMarkableBoard);
    const firstSolution = findNextSolution(numbers, markableBoards, new Set());
    return getBoardScore(markableBoards[firstSolution.solvedBoardIndexes[0]], firstSolution.lastNumber);
}

const solvePart2 = (numbers, boards) => {
    const markableBoards = boards.map(createMarkableBoard);
    let latestSolution, solvedBoards = new Set();
    while (solvedBoards.size !== boards.length) {
        const nextSolution = findNextSolution(numbers, markableBoards, solvedBoards);
        if (!nextSolution) {
            break;
        }

        latestSolution = nextSolution;
        numbers.splice(0, numbers.indexOf(latestSolution.lastNumber) + 1);
        for (let boardIndex of latestSolution.solvedBoardIndexes) {
            solvedBoards.add(boardIndex);
        }
    }

    return getBoardScore(markableBoards[latestSolution.solvedBoardIndexes[0]], latestSolution.lastNumber);
}

console.log(solvePart1(numbers, boards));
console.log(solvePart2(numbers, boards));
