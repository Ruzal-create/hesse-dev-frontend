import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = () => {
	return(
		<nav className="sticky relative conatiner max-width-7xl mx-auto p-6" >
			<div className="font-worksans font-semibold text-lg flex item-center justify-between">
				<motion.div
						initial={{
							y:-200,
							opacity: 0,
							
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1.2,
						}}
				 		className="pl-6">
							Logo
				</motion.div>

				<div className="hidden md:flex space-x-12 pr-12">
					<motion.div
						initial={{
							y:-200,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: .2,
						}}
					>
						<Link to='/'>Home</Link>
					</motion.div>
					<motion.div
						initial={{
							y:-200,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: .4,
						}}
					>
						<Link to='/'>Products</Link>
					</motion.div>

					<motion.div
						initial={{
							y:-200,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							duration: 1,
							delay: .6,
						}}
					>
						<Link to='/'>About us</Link>
					</motion.div>

					<motion.div
						initial={{
							y:-200,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: .8,
						}}
					>
						<Link to='/'>Sign Up</Link>
					</motion.div>

					<motion.div
						initial={{
							y:-200,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 1,
						}}
					>
					<Link to='/'>Sign In</Link>
					</motion.div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;