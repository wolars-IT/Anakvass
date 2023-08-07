CREATE TABLE IF NOT EXISTS orders (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    full_name       VARCHAR(125) NOT NULL,
    email           VARCHAR(320) NOT NULL,
    phone_number    VARCHAR(15) NOT NULL,
    address         VARCHAR(425) NOT NULL,
    box_count       INT UNSIGNED NOT NULL,
    comment         VARCHAR(255) NULL,
    status          ENUM('New', 'Hot', 'Sending', 'Done', 'Frozen') NOT NULL
);

CREATE TABLE IF NOT EXISTS admins (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    username        VARCHAR(25) UNIQUE NOT NULL,
    password        VARCHAR(200) NOT NULL,
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    last_login      DATE NULL,
    created_at      DATE DEFAULT CURRENT_DATE NOT NULL
);
