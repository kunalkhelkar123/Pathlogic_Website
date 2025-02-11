import {Link} from "react-router-dom";

/**
 * @description
 * A React component that renders a gradient background with a navigation and a title.
 * The navigation has a home link and a link to the workshops page, and if `techUri` is not
 * `workshop` or `workshops`, it also renders a link to the specific workshop with the
 * `techUri` as the slug.
 * The title is rendered as a h1 element with the `capitalize` class.
 * @param {string} [techUri] - The URI of the workshop to link to.
 * @param {string} [title] - The title of the workshop.
 * @returns {ReactElement} - The component markup.
 *
 * @example
 * // Render a header with a link to the workshop with the slug `workshop`
 * <WorkshopHeader techUri="iot-and-beyond" title="MERN Stack" />
 */
const WorkshopHeader = ({techUri, title}) => (
    // <div className="relative bg-gradient-to-l from-orange-400 via-orange-500 via-50% to-orange-600">
    <div className="relative circular-bg-pattern">
        <div className="absolute inset-0 bg-black/5 pattern-grid-lg"/>
        <div className="relative mx-auto max-w-7xl px-8 py-6 sm:px-6 lg:px-8">
            {/*<nav className="mb-4">*/}
            {/*    <ol className="flex flex-wrap items-center space-x-2 font-bold uppercase text-white/80">*/}
            {/*        <li>*/}
            {/*            <Link to="/" className="hover:text-white capitalize">*/}
            {/*                Home*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*        {techUri && (*/}
            {/*            <>*/}
            {/*                <li>/</li>*/}
            {/*                {techUri === 'workshop' ? (*/}
            {/*                    <li>*/}
            {/*                        <span className="text-white capitalize">*/}
            {/*                            /!* Render the title as a capitalized h1 element *!/*/}
            {/*                            workshops*/}
            {/*                        </span>*/}
            {/*                    </li>*/}
            {/*                ) : (*/}
            {/*                    <>*/}
            {/*                        <li>*/}
            {/*                            <Link to="/workshops" className="hover:text-white capitalize">*/}
            {/*                                workshops*/}
            {/*                            </Link>*/}
            {/*                        </li>*/}
            {/*                        {techUri !== 'workshops' && (*/}
            {/*                            <>*/}
            {/*                                <li>/</li>*/}
            {/*                                <li>*/}
            {/*                                    <span className="text-white capitalize">*/}
            {/*                                        /!* Render the title as a capitalized h1 element *!/*/}
            {/*                                        {techUri}*/}
            {/*                                    </span>*/}
            {/*                                </li>*/}
            {/*                            </>*/}
            {/*                        )}*/}
            {/*                    </>*/}
            {/*                )}*/}
            {/*            </>*/}
            {/*        )}*/}
            {/*    </ol>*/}
            {/*</nav>*/}
            <h1 className="text-4xl font-bold text-center text-white capitalize sm:text-3xl lg:text-5xl py-10 md:py-12">
                <span className="capitalize">{title}</span>
            </h1>
        </div>
    </div>
);

export default WorkshopHeader;